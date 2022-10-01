const express = require("express");

const router = new express.Router();

const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOption = {
      from: process.env.EMAIL,
      to: email,
      subject: "Send Email With React And Nodejs",
      html: "<h1>Congratulation You Successfully Send Email</h1>",
    };

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log(`Email Sent ${info.response}`);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router;
