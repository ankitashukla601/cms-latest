// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();

const { handlePost,handleGet } = require('../Controller/FooterCont');

router.route("/submit/footer/data").post(handlePost);
router.route("/get/footer/data").get(handleGet);


module.exports = router;
