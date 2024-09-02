// const loginModel = require ('../Model/LoginModel')
// const handleLogin =  async (req, res,next) => {
//     try {
//       const { uname, pass ,lastlogin} = req.body;

//       // await loginModel.create({
//       //   uname,pass
//       // })

      
//       // Find user login info using Mongoose
//       const userData = await loginModel.findOne({
//         username: uname,
//         password: pass,
//       });
  
//       if (userData) {
//         if (userData.password !== pass) {
//           // Invalid password
//           res.status(400).json({ error: "Invalid password" });
//         } else {
//           // Update lastLogin field
//           userData.lastlogin = new Date();
//           await userData.save();
//           // console.log(userData);
//           res.json({ data: userData ,lastlogin:userData.lastlogin});
//         }
//       } else {
//         // Username not found
//         res.status(404).json({ error: "Username not found" });
//       }
//     } catch (error) {
//       console.error(error);
//       next(error)
//     }
//   }

//   module.exports= handleLogin;
const loginModel = require('../Model/LoginModel');
const mongoose = require('mongoose');

const handleLogin = async (req, res, next) => {
  try {
    const { uname, pass } = req.body;

    // Step 1: Check if the default admin user exists
    const defaultUser = await loginModel.findById('66bd9dae3fbd59d58506c8bc');

    if (!defaultUser) {
      // Step 2: If the default user doesn't exist, create it
      const newUser = new loginModel({
        username: 'admin',
        password: 'admin',
        lastlogin: null,
      });
      await newUser.save();
      console.log('Default admin user created.');
    }
    // Step 3: Proceed with the existing login logic
    let userData = await loginModel.findOne({ username: uname });

    if (!userData) {
      // If the username doesn't exist
      return res.status(404).json({ error: "Username not found" });
    }

    // If the username exists, verify the password
    if (userData.password !== pass) {
      // Invalid password
      return res.status(400).json({ error: "Invalid password" });
    }

    // Update lastLogin field for the existing user
    userData.lastlogin = new Date();
    await userData.save();

    // Send a success response
    return res.json({ message: "Login successful", data: userData });

  } catch (error) {
    console.error("An error occurred during login:", error);
    // Handle unexpected errors
    return res.status(500).json({ error: "An unexpected error occurred during login." });
  }
};

module.exports = handleLogin;
