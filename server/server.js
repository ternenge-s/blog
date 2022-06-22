require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const router = express.Router();

const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.USER_ADDRESS,
    pass: process.env.SECRETE,
  },
};
const transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  }
  console.log('connection secured');
});

router.post('/mail', (req, res) => {
  const { fname, lname, email, message } = req.body;

  let content = `name: ${
    fname + ' ' + lname
  } \n email: ${email} \n message: ${message}`;

  const mail = {
    from: fname + lname,
    to: 'tekpriest.org@gmail.com',
    subject: 'new message from your portfolio',
    text: content,
  };

  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'failed' });
    } else {
      res.json({
        status: 'success',
        data: res.data,
      });
    }
  });

  const reponse = {
    from: 'Ternenge',
    to: email,
    subject: 'Response from ternenge',
    text: 'I received your message. you will receive a response soon, stay safe',
  };

  transporter.sendMail(reponse, (error) => {
    if (error) {
      res.json({
        status: 'failed',
      });
    }
  });
});

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());

app.use('/', router);

app.listen(3001, () => {
  console.log('listening on localhost:3001');
});
