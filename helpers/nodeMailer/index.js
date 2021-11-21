const nodemailer = require("nodemailer");

async function confirmationText(email, subject, message) {
  await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",

    secure: false, // true for 465, false for other ports
    auth: {
      user: "qsolutiondev@gmail.com",
      pass: "Major2013@",
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
