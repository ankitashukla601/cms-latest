const mongoose = require('mongoose')
const mediaSchema = new mongoose.Schema({
    filename: String,
  });
  
  const FileuploadModel = mongoose.model("SliderFileuploadModel", mediaSchema);

  module.exports = FileuploadModel;