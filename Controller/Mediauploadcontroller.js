const { MdOutlineLeaderboard } = require('react-icons/md');
const MediaUploadModel = require('../Model/Mediauploadmodel')
const {
  handleGetCommon,
  handleCommonFileUpload,
  } = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const fileField = "filename"
  handleCommonFileUpload(req, res, MediaUploadModel, fileField, next)
}


const handleGetImgtoPopup = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, MediaUploadModel, queryOptions, next)
}


  module.exports={handlePost,handleGetImgtoPopup}

 










