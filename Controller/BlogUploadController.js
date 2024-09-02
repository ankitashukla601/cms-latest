const MediaModel = require('../Model/BlogFileuploadModel')
const {
  
  handleGetCommon,
  handleGetToAnotherCommon,
  handleCommonFileUpload,
  } = require("../utils/CommonHandler");

  
const handlePost = ( async (req, res,next) => {
  const fileField = "filename"
  handleCommonFileUpload(req, res, MediaModel, fileField, next)
  })



  const handleGetImgtoPopup = async (req, res,next) => {
    const queryOptions = {};
    handleGetCommon(req, res, MediaModel, queryOptions, next)
  }
  module.exports={handlePost,handleGetImgtoPopup}