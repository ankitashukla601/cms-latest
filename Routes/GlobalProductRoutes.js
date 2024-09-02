const express = require('express')
const router = express.Router()

const {handlePost,handleGet} = require('../Controller/GlobalProductsCont')

router.route('/submit/global/product/data').post(handlePost)
router.route('/get/global/product/data').get(handleGet)

module.exports= router;