const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};
var arr = {};
const SendMail = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(process.env.EMAIL_USER);
        console.log(process.env.EMAIL_PASS);
        const otp = generateOTP();
        console.log(email, otp)
        arr[email] = otp;
        const emailPage = `
        <div style="font-size:24px;">Dear <span style="color:#f72585">Hello User,</span>,</div><br/>
        <div style="font-size:24px">Your Otp is : <span style="font-weight:600;">${otp}</span></div>`
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Otp Verification",
            html: emailPage,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
}

const verifOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (arr[email] === otp) {
            return res.status(200).json({ "message": "ok" });
            arr = {};
        }
        return res.status(400).json({ "message": "not ok" });
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure the 'public/images' directory exists
        const uploadDir = path.join(__dirname, '../public/images');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Create a unique filename or use the original one
        const fileExtension = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + fileExtension;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Example route for handling file uploads
const uploadImage = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.status(400).send('Error uploading file');
        }
        res.status(200).send('File uploaded successfully');
    });
};


exports.SendMail = SendMail;
exports.verifOTP = verifOTP;
exports.uploadImage = uploadImage;