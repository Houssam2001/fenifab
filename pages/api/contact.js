import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const { user, pass } = process.env;

const jsonParser = bodyParser.json();

export default async function ContactAPI(req, res) {
  if (req.method === 'POST') {
    const { name, email,subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "houssam2001mchmch@gmail.com",
        pass: "uxsvqvrdypfbroad"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    try {
      await transporter.sendMail({
        from: "houssam2001mchmch@gmail.com", 
        to: 'a.fenifab@gmail.com', 
        subject: `${subject}`,
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `
      });
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  } else {
    return res.status(400).json({ error: 'Bad request method' });
  }
}
