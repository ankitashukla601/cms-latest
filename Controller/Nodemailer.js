const nodemailer = require('nodemailer');
const GlobalSmtpModel= require('../Model/GlobalSmtpModel');
const EmailLog = require('../Model/NodeModel'); // Import the EmailLog model
async function createTransporter() {
    try {
      // Fetch SMTP settings from the database
      const smtpSettings = await GlobalSmtpModel.findOne({ settingSlug: 'smtp_settings' });
  
      if (!smtpSettings) {
        throw new Error('SMTP settings not found.');
      }
  
      // Create the transporter with fetched settings
      return nodemailer.createTransport({
        service: smtpSettings.host,
        port: smtpSettings.port,
        secure: smtpSettings.port === 465, // true for 465, false for other ports
        auth: {
          user: smtpSettings.username,
          pass: smtpSettings.password,
        },
      });
    } catch (error) {
      console.error('Error creating transporter:', error);
      throw error;
    }
  }
//  const handlePostMail = async (req, res) => {
//     try {
//       // Create transporter
//       const transporter = await createTransporter();
//       const { to, subject, text } = req.body;
  
//       const mailOptions = {
//         from: transporter.options.auth.user, 
//         to,
//         subject,
//         text,
//       };
  
//       // Send email
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//       });
//     } catch (error) {
//       res.status(500).send('Error sending email: ' + error.message);
//     }
//   }
const handlePostMail = async (req, res) => {
  try {
    const transporter = await createTransporter();
    const { to, subject, text } = req.body;

    const mailOptions = {
      from: transporter.options.auth.user,
      to,
      subject,
      text,
    };

    // Send email
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }

      // Save email details to the database
      const emailLog = new EmailLog({ to, subject, text });
      await emailLog.save();

      res.status(200).send('Email sent: ' + info.response);
    });
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
}
const handleGet = async(req,res)=>{
  console.log("emailLogs",EmailLog)
    try {
      const emailLogs = await EmailLog.find(); // Fetch all email logs
      res.status(200).json(emailLogs);
    } catch (error) {
      res.status(500).send('Error retrieving email logs: ' + error.message);
    }
  

  }
  
  const handleDelete = async(req,res)=>{

    const { id } = req.params;

  console.log("emailLogs",EmailLog)
    try {
      const emailLogs = await EmailLog.findByIdAndDelete(id); // Fetch all email logs
      if (!emailLogs) {
        return res.status(404).json({ error: "Form not found" });
      }
      res.json({ message: "Form deleted successfully" });
    } catch (error) {
      res.status(500).send('Error retrieving email logs: ' + error.message);
    }
  
}
   
    module.exports= {handlePostMail,handleGet,handleDelete}