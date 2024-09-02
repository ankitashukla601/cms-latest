const express = require('express')
const router = express.Router()

const {handlePost,handleGet} = require('../Controller/GlobalBlogCont')

router.route('/submit/global/blog/data').post(handlePost)
router.route('/get/global/blog/data').get(handleGet)

module.exports= router;