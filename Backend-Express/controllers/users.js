const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    // res.render('users/register');
    // res.send("renderRegister")
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Good Merchant!');
            res.send("Register")
            // res.redirect('/homepage');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.send("errorRegister")
        // res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    // res.render('users/login');
    res.send("renderlogin")
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/homepage';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', "Goodbye!");
    // res.redirect('/homepage');
    res.send("logout")
}