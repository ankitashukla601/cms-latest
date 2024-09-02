const express = require('express')

const router = express.Router()
const { handlePostMail,handleGet ,handleDelete}= require('../Controller/Nodemailer') 

router.route('/send/email').post(handlePostMail)
router.route('/get-email-logs').get(handleGet)
router.route('/delete-email-log/:id').delete(handleDelete)




module.exports = router;