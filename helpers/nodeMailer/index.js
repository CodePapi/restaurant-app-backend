const nodemailer = require("nodemailer");
const dotenv=require("dotenv")
dotenv.config();

async function confirmationText(email, subject, message) {
  await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",

    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Restaurants Booking App 👨‍💻 👩‍💻" <qsolutiondev@gmail.com>', // sender address
    to: email,
    subject: `${subject}`, // Subject line
    html: message, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports= {confirmationText};
