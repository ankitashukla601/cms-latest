const express = require('express')
const router = express.Router()

const {handlePost,handleGet} = require('../Controller/GlobalImgGallery')

router.route('/submit/global/imgGallery/data').post(handlePost)
router.route('/get/global/imgGallery/data').get(handleGet)

module.exports= router;