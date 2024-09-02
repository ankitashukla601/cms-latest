const express = require('express')
const router = express.Router()
const upload= require('../MulterStorage')

const {handlePost,handleGetImgtoPopup} = require('../Controller/BlogUploadController')

router.route('/upload-img-two').post(upload.single("file"),handlePost)
router.route('/get-img-two').get(handleGetImgtoPopup)
module.exports = router;