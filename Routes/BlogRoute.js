const express = require("express");
const router = express.Router();

const {
  handlePost,
  handleGet,
  handleUpdateCheckbox,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleGetwithoutImage,
  handleUpdateCheckbox2,
  handleGetCategory,
  handleBlogFrontendDataShow,
  handleBlogDetailFrontendDataShow,
  handleRelatedBlogDataShow,
} = require("../Controller/BlogController");
const upload = require("../MulterStorage");

router.route("/add-two").post(upload.array("file"), handlePost);
router.route("/get/slides-two").get(handleGet);
router.route("/get/slides/without/image-two").get(handleGetwithoutImage);
router.route("/delete/slider/img-two/:id").delete(handleDelete);
router
  .route("/update/slide/checkbox-two/:id/:publish")
  .get(handleUpdateCheckbox);
router
  .route("/update/slide/frontpage/checkbox-two/:id/:frontpage")
  .get(handleUpdateCheckbox);
router.route("/get-slide-data-two/:id").get(handleEdit);
router.route("/edit/slide-two/:id").put(upload.single("file"), handleUpdate);
router.route("/get/category/data").get(handleGetCategory);
router.route("/show/frontend/blog/data").get(handleBlogFrontendDataShow);
router
  .route("/show/frontend/blog/detail/:slug")
  .get(handleBlogDetailFrontendDataShow);
router
  .route("/show/frontend/related/blog/:category/:slug")
  .get(handleRelatedBlogDataShow);
module.exports = router;
