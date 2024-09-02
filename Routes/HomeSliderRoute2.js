const express = require("express");
const router = express.Router();

const {
  handleGet,
  handleGetHomesliderdata,
  handleSubmitCheckBox,
  handleDelete,
 
} = require("../Controller/HomeSliderController2");

router.route("/upload/home/slider/img-two/:id").get(handleGet);
router.route("/get-add-home-slider-img-two").get(handleGetHomesliderdata);
router.route("/delete/home/slider/img-two/:id").delete(handleDelete);
router.route("/submit/home/silder/checkbox-value-two").post(handleSubmitCheckBox);


module.exports = router;
