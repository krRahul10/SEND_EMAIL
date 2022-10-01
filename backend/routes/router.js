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
        from:process.env.EMAIL,
        to:email,
        subject:"Send Email With React And Nodejs",
        html:'<h1>Congratulation You Successfully Send Email</h1>'

    }
    
  } catch (err) {}
});

module.exports = router;
