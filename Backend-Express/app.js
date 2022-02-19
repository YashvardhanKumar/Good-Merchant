if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
// const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
const userRoutes = require('./routes/users');

// const MongoDBStore = require("connect-mongo")(session);

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/good-merchant';

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("connection open!");
    })
    .catch((err) => {
        console.log("error!");
        console.log(err);
    });

const app = express();

// app.engine('ejs', ejsMate)
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, '../public')))
// app.use(mongoSanitize({
//     replaceWith: '_'
// }))
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

// const store = new MongoDBStore({
//     url: dbUrl,
//     secret,
//     touchAfter: 24 * 60 * 60
// });

// store.on("error", function (e) {
//     console.log("SESSION STORE ERROR", e)
// })

const sessionConfig = {
    // store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());
// app.use(helmet());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use("/search", function (req, res, next) {
    var options = { method: 'GET',
    url: 'https://localhost:5000/search',
    headers: 
     { 'cache-control': 'no-cache',
       Connection: 'keep-alive',
       'accept-encoding': 'gzip, deflate',
       Host: 'localhost:5000',
       'Cache-Control': 'no-cache',
       Accept: '*/*',
       'User-Agent': 'PostmanRuntime/7.15.0' }
      };
  
  
    return request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.json(body);
    });
  });
// app.use('/', userRoutes);

app.get('*', (req, res, next) => {
    // res.render('home')
    // console.log(path.join(__dirname, "../public", "index.html"))
    // res.send("ha")
    // res.sendFile("index.html")
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    // res.status(statusCode).render('error', { err })
    res.status(statusCode).send('error')
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})