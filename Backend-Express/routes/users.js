const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)
router.post('/qimageurl',(req,res) => {
    res.redirect('http://127.0.0.1:5000/search')
})
router.post('/qimage', (req,res) => {
    request('http://127.0.0.1:5000/search', (error, response, body) => {
        // console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      }); 
})


// const uploadStream = (file) => {
//     pass = PassThrough()
//     const form = new FormData();
//     form.append('flask_file_field', pass, file.originalFilename);
//     form.submit('http://localhost:5000/upload', (err, res) => {
//       console.error(err);
//       res.resume();
//     });
//     return pass
//   };
  
//   app.post('/upload', async (req, res) => {
//       const form =  formidable({
//         fileWriteStreamHandler: uploadStream
//       });
//       form.parse(req, (err, fields, files) => {
//         res.json('Success!');
//       });
//   });

module.exports = router;