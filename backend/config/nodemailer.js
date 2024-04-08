import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // user: process.env.EMAIL_ADDRESS,
    // pass: process.env.EMAIL_PASSWORD,
    user: "haque.siam99@gmail.com",
    pass: "tgqsxvxzznonyvmk",
  },
});

const { sendMail } = transporter;

export default sendMail.bind(transporter);
