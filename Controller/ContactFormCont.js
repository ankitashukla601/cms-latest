// controllers/contactController.js
const Contact = require('../Model/ContactFormModel');
const nodemailer = require('nodemailer');

const GlobalSmtpModel = require('../Model/GlobalSmtpModel')
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

  const createContact = async (req, res) => {
    try {
      const transporter = await createTransporter();
  
      // Extract form data correctly
      const { name, email, message } = req.body.formData;
  
      // Define mail options
      const mailOptions = {
        from: transporter.options.auth.user,
        to: email,
        subject: "Thank you for your subscription",
        text: `${name}, here is your message: ${message}`,
      };
  
      // Send the email
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          return res.status(500).send(error.toString());
        }
  
        // Save the contact data after sending the email
        const newContact = new Contact({ name, email, message });
        await newContact.save();
  
        res.status(201).json({ message: 'Message sent successfully' });
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      res.status(500).json({ error: 'Server error. Please try again later.' });
    }
  };
  
  
// const createContact = async (req, res) => {
//   try {
//     const transporter = await createTransporter();


//       const { name, email, message } = req.body;

//     const mailOptions = {
//         from: transporter.options.auth.user,
//         to:email,
//         subject:"Thanku for subscription",
//         text:`${name} this  msg ${message}`,
//       };
  
//       // Send email
//       transporter.sendMail(mailOptions, async (error, info) => {
//         if (error) {
//           return res.status(500).send(error.toString());
//         }

   

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: 'Message sent successfully' });})
//   } catch (error) {
//     console.error('Error saving contact message:', error);
//     res.status(500).json({ error: 'Server error. Please try again later.' });
//   }
// };
module.exports= {createContact}
