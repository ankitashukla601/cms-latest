const express = require("express");
const router = express.Router();

const {
    handleAddImageToMedia,
    handleGetMediaImages,
    handleDelete,handlePublishpageCheckboxUpdate,
    handleShowMediaDataFrontend


} = require("../Controller/MediaMainPage");
const upload = require('../MulterStorage')



router.route("/media/add/image").post( upload.array('file'),handleAddImageToMedia);
router.route("/media/get/images").get( handleGetMediaImages);
router.route("/show/media/gallery/frontend").get( handleShowMediaDataFrontend);
router.route("/media/delete/images/:id").delete( handleDelete);
// router.route("/media/frontpage/images").get( handleSubmitCheckBox);
router.put('/media/toggle/:id/:showInGallery', handlePublishpageCheckboxUpdate);// router.route("/update-slide-checkbox/:id/:frontpage").get(handleSubmitCheckBox);


module.exports = router;
