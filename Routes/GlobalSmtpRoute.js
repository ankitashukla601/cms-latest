const express = require('express')
const router = express.Router()

const {handlePost,handleGet, } = require('../Controller/GlobalSmtpCont')

router.route('/submit/global/smtp/data').post(handlePost)
router.route('/get/global/smtp/data').get(handleGet)
module.exports= router;