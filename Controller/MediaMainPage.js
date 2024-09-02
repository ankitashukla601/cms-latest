const MediaMainPagemodel = require("../Model/MediamainPageModel");
const MediaUploadModel = require("../Model/Mediauploadmodel");
const mongoose = require("mongoose");
const GlobalGalleryModel = require("../Model/GlobalGalleryModel");
const {
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");
const { sendResponse, handleError } = require("../utils/responseHandler");


const handleAddImageToMedia = async (req, res, next) => {
  try {
        const newdata = new MediaMainPagemodel({
          file: req.body.file,
          showInGallery:"", // Set default value to 2 for publish
        });
        await newdata.save();
        // console.log("Data added successfully:", newdata);
        res.status(201).json(newdata);
      } catch (error) {
        console.error("Error adding image:", error);
        next(error);
      }
}


const handleGetMediaImages = async (req, res, next) => {
  try {
    const imageData = await MediaMainPagemodel.find();
    let arr = [];

    for (let index = 0; index < imageData.length; index++) {
      const MediaMainPageData = imageData[index];
      let element = {};
      element.autoID = MediaMainPageData._id;
      element.file = MediaMainPageData.file;
      element.showInGallery = MediaMainPageData.showInGallery;

      if (MediaMainPageData.file && MediaMainPageData.file.length > 0) {
        const newID = new mongoose.Types.ObjectId(MediaMainPageData.file[0]);
        const img = await MediaUploadModel.findById(newID);
        if (img) {
          element.filename = img.filename;
        } else {
          element.filename = "";
        }
      } else {
        element.filename = "";
      }
      arr.push(element);
    }
    sendResponse(res, 200, arr);
  } catch (error) {
    handleError(error, res);
    console.error("Error fetching slides:", error);
    next(error);
  }
}


const handleDelete = async (req, res, next) => {
  handleCommonDelete(MediaMainPagemodel, req.params.id, res, next);
}


const handleShowMediaDataFrontend = async (req, res, next) => {
  try {
    const GlobalGallery = await GlobalGalleryModel.findOne({ disGallery: 1 });
    if (GlobalGallery) {
      const imageData = await MediaMainPagemodel.find({
        showInGallery: 1,
      });
      let arr = [];

      for (let index = 0; index < imageData.length; index++) {
        const MediaMainPageData = imageData[index];
        let element = {};
        element.autoID = MediaMainPageData._id;
        element.file = MediaMainPageData.file;
        element.showInGallery = MediaMainPageData.showInGallery;

        if (MediaMainPageData.file && MediaMainPageData.file.length > 0) {
          const newID = new mongoose.Types.ObjectId(MediaMainPageData.file[0]);
          const img = await MediaUploadModel.findById(newID);
          if (img) {
            element.filename = img.filename;
          } else {
            element.filename = "";
          }
        } else {
          element.filename = "";
        }
        arr.push(element);
      }
      // console.log(arr);
      res.status(200).json({ arr, GlobalGallery });
    }
  } catch (error) {
    handleError(error, res);
    console.error("Error fetching slides:", error);
    next(error);
  }
}


const handlePublishpageCheckboxUpdate = async (req, res,next) => {
  const updateFields = {
    showInGallery: req.params.showInGallery,
  }
  handleUpdateCommon(req, res, MediaMainPagemodel, updateFields, next);
};


module.exports = {
  handleAddImageToMedia,
  handleGetMediaImages,
  handleDelete,
  handlePublishpageCheckboxUpdate,
  handleShowMediaDataFrontend,
};
