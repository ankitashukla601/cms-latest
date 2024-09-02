const HomesliderModel = require("../Model/HomeSliderModel");
const MediaModel = require("../Model/SliderFileupload");
const mongoose = require('mongoose')
//to get uploaded data to send to another page on clicking the add button
const {
  handleGetCommon,
  handleCommonDelete,
} = require("../utils/CommonHandler");
const NodeError = require("../Errors/NodeErr");
const { sendResponse, handleError } = require("../utils/responseHandler");



const handleGet = async (req, res ,next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NodeError(404, "Invalid ObjectId");
    }
    const image = await MediaModel.findById(id);
    if (!image) {
      throw new NodeError(404, "Image not found");
    }
    sendResponse(res, 200, image);
  } catch (error) {
    handleError(error, res);
   next(error)
  }
}


//to get into add slide page  page

const handleGetHomesliderdata = async (req, res ,next) => {
  const queryOptions = {};
  handleGetCommon(req, res, HomesliderModel, queryOptions, next);
}


const handleDelete = async (req, res ,next) => {
  handleCommonDelete(HomesliderModel, req.params.id, res, next);
}


const handleSubmitCheckBox = async (req, res ,next) => {
  try {
    // Create a new checkbox document and save it to the database
    const checkbox = new HomesliderModel({ value: req.body.value });
    // console.log(checkbox.value);
    res.json({ checkbox: checkbox.value });
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};



module.exports = {
  handleGet,
  handleGetHomesliderdata,
  handleDelete,
  handleSubmitCheckBox,
};
