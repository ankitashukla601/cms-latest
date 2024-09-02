const mongoose = require('mongoose')
const CustomThemeSchema = new mongoose.Schema({
    filename: String,
    title: String,
    taglines: String,
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
      colhead3:String
  });
  
  const CustomThemeModel = mongoose.model("CustomThemeData", CustomThemeSchema);

  module.exports = CustomThemeModel;