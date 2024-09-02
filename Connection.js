

const mongoose = require("mongoose");


 const serverUrl = "mongodb://127.0.0.1:27017/datatable_cms";

const serverConnection = async () => {
  try {
    await mongoose.connect(serverUrl, {  });
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error('COULD NOT CONNECT TO DATABASE:', error.message);
   
  }

}




module.exports= serverConnection;


