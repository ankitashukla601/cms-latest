const express = require("express");
const router = express.Router();

const {
  handlePost,
  handleGet,

 
} = require("../Controller/TemplateCont");

router.route("/submit/template/data").post(handlePost);
router.route("/get/template/data").get(handleGet);


module.exports = router;
