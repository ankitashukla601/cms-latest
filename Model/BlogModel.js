
const mongoose = require('mongoose')
const sliderSchema = new mongoose.Schema({
    file: Array,
    title: String,
    publish: Number, 
    editorContent: String,
    category:String,
    date:Date,
     slug: { type: String },
    metatitle: { type: String },
    metades: { type: String },
    frontpage: { type: Number },
    selected: { type: Array },
    htmlContent: String,
  });
  
  //add slide
  const sliderModel = mongoose.model("BlogData", sliderSchema);
  module.exports = sliderModel

