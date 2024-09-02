
const mongoose = require('mongoose')
const GlobalSmtpSchema = new mongoose.Schema({

    host: String,
    username: String,
    password: String,
    port: Number,
    settingSlug:String,
    


})

const GlobalSmtpModel = mongoose.model('GlobalSmtpData',GlobalSmtpSchema)

module.exports= GlobalSmtpModel