const mongoose = require('mongoose')
const FormDefinitionSchema = new mongoose.Schema({
  display: String,
  components: Array,
  formName:String,
  publish:Number,
  sendMail:Boolean
});

 const FormDefinition = mongoose.model(
  "FormDefinition",
  FormDefinitionSchema
);
// Define a schema and model for storing form submissions
const FormioDataSchema = new mongoose.Schema({
  components: Array,
  
  formData: Object,
  formName:String ,
  sendMail:String
});

 const FormioData = mongoose.model("FormioData", FormioDataSchema);
module.exports = {FormDefinition,FormioData}