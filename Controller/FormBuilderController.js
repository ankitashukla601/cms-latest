const { FormioData, FormDefinition } = require("../Model/FormBuilderModel");
const nodemailer = require("nodemailer");
const GlobalSmtpModel = require("../Model/GlobalSmtpModel");
const { sendResponse, handleError } = require("../utils/responseHandler");

const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");
const Contact = require("../Model/ContactFormModel"); 
const { error } = require("console");

// Function to create the transporter with SMTP settings
async function createTransporter() {
  try {
    // Fetch SMTP settings from the database
    const smtpSettings = await GlobalSmtpModel.findOne({
      settingSlug: "smtp_settings",
    });
    if (!smtpSettings) {
      throw new Error("SMTP settings not found.");
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
    console.error("Error creating transporter:", error);
    throw error;
  }
}


const handlePostFormDefinition = async (req, res,next) => {
  const uniqueFields = { };
  handlePostCommon(req, res, FormDefinition, uniqueFields, next);
}


const handleGetFormDefinition = async (req, res,next) => {
  const queryOptions = {};
  handleGetCommon(req, res, FormDefinition, queryOptions, next);
}


const handleFrontendDataShow = async (req, res, next) => {
  const queryOptions = {
    publish: 1 
  }
  handleGetCommon(req, res, FormDefinition, queryOptions, next)
}


const handlePublishCheckboxUpdate = async (req, res,next) => {
  const updateFields = {
    publish: req.params.publish,
  }
  handleUpdateCommon(req, res, FormDefinition, updateFields, next);
}


const handleDelete = async (req, res,next) => {
  handleCommonDelete(FormDefinition, req.params.id, res, next);
}



const handleEdit = async (req, res,next) => {
  handleEditCommon(req, res, FormDefinition, next);
};


const handleUpdate = async (req, res,next) => {
  const updateFields = {
    formName: req.body.formName,
    publish: req.body.publish,
    components: req.body.components,
    display: req.body.display,
    sendMail: req.body.sendMail,
  };
  handleUpdateCommon(req, res, FormDefinition, updateFields, next);
}


const handlePostFormioData = async (req, res) => {
  const formId = req.params._id; // Assuming form ID is passed as a URL parameter
  const { formData, formName, components } = req.body; // Extract form data from request body
  try {
    // Fetch form definition by ID
    const formDefinition = await FormDefinition.findOne(formId);

    if (!formDefinition) {
      return res.status(404).json({ error: "Form definition not found" });
    }
    console.log("Form Definition:", formDefinition);
    // Save form data
    const savedFormData = await FormioData.create({
      formData,
      formName,
      components,
      sendMail: formDefinition.sendMail, // Use sendMail value from the form definition
    });

    // Send email if sendMail is true
    if (formDefinition.sendMail) {
      console.log("sendMail is true, sending email...");

      const transporter = await createTransporter();
      const recipientEmail =
        formData.email ||
        formData.email1 || // First priority
        formData.email2 || // Fallback if primaryEmail is missing
        "default@example.com";
      // const recipientEmail = formData.email || "default@example.com"; // Fallback email
      const senderName =
        formData.textField ||
        formData.textField1 ||
        formData.textField2 ||
        formData.name ||
        "No Name Provided"; // Fallback name
      const messageContent =
        formData.message ||
        formData.textArea ||
        formData.textArea1 ||
        formData.textArea2 ||
        "No Message Provided"; // Fallback message

      const mailOptions = {
        from: transporter.options.auth.user,
        to: recipientEmail,
        subject: "New Form Submission",
        text: `Name: ${senderName}\n\nMessage: ${messageContent}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    }
    sendResponse(res, 201, savedFormData);
  } catch (error) {
    console.error("Error saving form data or sending email:", error);
    handleError(error, res);
  }
}

const handleGetFormioData = async (req, res,next) => {
  const queryOptions = {};
  handleGetCommon(req, res, FormioData, queryOptions, next);
}



const handleDeleteFormData = async (req, res,next) => {
  handleCommonDelete(FormioData, req.params.id, res, next);
};
module.exports = {
  handlePostFormDefinition,
  handleGetFormDefinition,
  handlePostFormioData,
  handleGetFormioData,
  handleFrontendDataShow,
  handlePublishCheckboxUpdate,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleDeleteFormData,
};
