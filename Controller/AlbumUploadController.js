const AlbumUploadModel = require("../Model/AlbumUploadModel");
const {
  
  handleGetCommon,
  handleGetToAnotherCommon,
  handleCommonFileUpload,
  } = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const fileField = "filename"
  handleCommonFileUpload(req, res, AlbumUploadModel, fileField, next)

};


const handleGetImgtoPopup = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, AlbumUploadModel, queryOptions, next)
};



const handleAddImgToAnotherPage = async (req, res, next) => {
  handleGetToAnotherCommon(req, res, AlbumUploadModel, next);
};


module.exports = { handlePost, handleGetImgtoPopup, handleAddImgToAnotherPage };
