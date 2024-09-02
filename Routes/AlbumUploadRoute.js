const express = require('express')
const router = express.Router()
const upload= require('../MulterStorage')

const {handlePost,handleGetImgtoPopup,handleAddImgToAnotherPage} = require('../Controller/AlbumUploadController')

router.route('/upload/album/img').post(upload.single("file"),handlePost)
router.route('/get/uplod/album/img').get(handleGetImgtoPopup)
router.route("/add/album/img/addNewAlbum/page/:id").get(handleAddImgToAnotherPage);

module.exports = router;