const express = require('express')
const router = express.Router()
const upload= require('../MulterStorage')

const {handlePost,handleGet,handleUpdate} = require('../Controller/CustomThemeCont')

router.route('/submit/frontend/logo/data').post(upload.single("logo"),handlePost)
router.route('/update').post(upload.single("logo"),handleUpdate)
router.route('/get/forntend/logo').get(handleGet)
module.exports = router;