const express = require("express");
const router = express.Router();

const {
  handlePost,
  handleGetVideo,

  handleUpdateCheckbox,
  handleDelete,
  handleEdit,
  handleUpdate,handleVideoShowfrontend,handleFrontpageRadioUpdate
} = require("../Controller/VideoController");

router.route("/submit/video-data").post(handlePost);
router.route("/get/video/data").get(handleGetVideo);
router.route("/delete/video/data/:id").delete(handleDelete);
router.route("/update-video-checkbox/:id/:publish").get(handleUpdateCheckbox);
router.route("/edit/video/data/:id").get(handleEdit);
router.route("/update/video/data/:id").put(handleUpdate);
router.route("/show/video/frontend").get(handleVideoShowfrontend);
router.route("/general/video/frontpage/value/:id/:frontpage").get(handleFrontpageRadioUpdate);

module.exports = router;
