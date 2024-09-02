
const mongoose = require('mongoose')
const footerSchema = new mongoose.Schema({
    colNum: Number,
    colhead1:String,
    colData1: String,
    colhead2:String,
    colData2: String,
    colhead3:String,
    colData3: String,
    colhead4: String,
    colData4:String,
    copyRight:String,
  });
  
  //add slide
  const footerModel = mongoose.model("footerData", footerSchema);
  module.exports = footerModel

