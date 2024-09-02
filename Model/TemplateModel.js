const mongoose = require('mongoose')

  const TemplateSchema = new mongoose.Schema({
    templateSlug: String,
   
    editorContent:String
  });
  
  const templateModel = mongoose.model(
    "templateData",
    TemplateSchema
  );
  module.exports = templateModel