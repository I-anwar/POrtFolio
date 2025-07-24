const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Replace with your email and app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khanbaba750091@gmail.com',
    pass: 'kowv tevw wmxh jkne'
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'khanbaba750091@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Error sending email.' });
    }
    res.json({ success: true, message: 'Message sent successfully!' });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});