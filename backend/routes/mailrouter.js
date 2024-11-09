const express = require('express');
const Router = express.Router();
const mailcontroller = require('../controllers/mailsender');

Router.post('/send-mail',mailcontroller.SendMail);
Router.post('/verify-otp',mailcontroller.verifOTP);
Router.post('/upload-image',mailcontroller.uploadImage);


module.exports = Router;
