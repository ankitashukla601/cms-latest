const HomesliderModel = require("../Model/HomeSliderModel2");
const MediaModel = require("../Model/BlogFileuploadModel");
const { sendResponse, handleError } = require("../utils/responseHandler");
const NodeError = require("../Errors/NodeErr");
const mongoose = require('mongoose')
const {
  handleGetCommon,
  handleCommonDelete,
} = require("../utils/CommonHandler");
//to get uploaded data to send to another page on clicking the add button


const handleGet = async (req, res ,next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NodeError(404, "Invalid ObjectId");
  }
  try {
    const formData = await MediaModel.findById(id);
    if (!formData) {
      // console.log(`No data found for ID: ${id}`);
      throw new NodeError(404, "Image not found ");
    }
    sendResponse(res, 200, formData);
    // res.status(200).json(formData);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

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
    console.error("Error storing value:", error);
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
