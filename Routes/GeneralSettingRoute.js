const express = require('express')
const router = express.Router();


const {handlePost,handleUpdate,handleGet} =require('../Controller/GeneralSettingCont');
router.route("/submit/general/setting/data").post(handlePost)
router.route("/submit/general/setting/update-data/:id").put(handleUpdate)
router.route("/get/general/data").get(handleGet)

module.exports= router