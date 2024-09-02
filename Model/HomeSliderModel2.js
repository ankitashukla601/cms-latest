const mongoose = require('mongoose')


//ad slide
const homesliderSchema2 = new mongoose.Schema({
    file: String,
  });
  const HomesliderModel2 = mongoose.model("homesliderdata2", homesliderSchema2);

  module.exports = HomesliderModel2