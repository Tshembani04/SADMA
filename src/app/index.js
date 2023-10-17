const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aurthurmhlongo@gmail.com",
    pass: "123456789",
  },
});

exports.sendNotificationEmail = functions.firestore
  .document("disasterReports/{reportId}")
  .onCreate((snap, context) => {
    const reportData = snap.data();
    const email = "recipient-email@example.com";

    const mailOptions = {
      from: "aurthurmhlongo@gmail.com",
      to: email,
      subject: "New Disaster Report",
      text: `A new disaster report has been submitted:\n\nLocation: ${reportData.location}\nTitle: ${reportData.title}\nDescription: ${reportData.description}`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });
