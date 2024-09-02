

const express = require("express");
const router = express.Router();

const {
  handlePost,
  handleGet,
  handleUpdateCheckbox,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleGetwithoutImage,handleFrontendDataShow
} = require("../Controller/ManageAlbumController");
const upload = require('../MulterStorage')



router.route("/submit/album").post( upload.array('file'),handlePost);
router.route("/get/album").get( handleGet);
router.route("/get/album/without/image").get(handleGetwithoutImage);
router.route("/delete/album/data/:id").delete(handleDelete);
router.route("/update/album/checkbox/:id/:publish").get(handleUpdateCheckbox);
router.route("/edit/album/data/:id").get(handleEdit);
router.route("/update/album/:id").put(upload.single('file'), handleUpdate);
router.route('/show/album/forntend/data').get(handleFrontendDataShow)



module.exports = router;
