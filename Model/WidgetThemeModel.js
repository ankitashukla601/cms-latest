const  mongoose  = require("mongoose");

const WidgetSchema =new  mongoose.Schema({
     // Define your form fields here
  title: { type: String },

  editorContent: { type: String },

})

const WidgetModel = mongoose.model("WidgetData", WidgetSchema);
module.exports=  WidgetModel