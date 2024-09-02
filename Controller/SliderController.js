const sliderModel = require("../Model/SliderModel");
const mongoose = require("mongoose");
const MediaModel = require("../Model/SliderFileupload");
const {
  handlePostCommon,
  handleGetCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");
const NodeError = require("../Errors/NodeErr");
const { sendResponse, handleError } = require("../utils/responseHandler");



const handlePost = async (req, res, next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, sliderModel, uniqueFields, next);
};



const handleGetwithoutImage = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, sliderModel, queryOptions, next);
};


// Fetch all slides
const handleGet = async (req, res, next) => {
  try {
    const imageData = await sliderModel.find();
    let arr = [];
    for (let index = 0; index < imageData.length; index++) {
      const sliderModelData = imageData[index];
      let element = {};
      element.autoID = sliderModelData._id;
      element.title = sliderModelData.title;
      element.publish = sliderModelData.publish;
      element.editorContent = sliderModelData.editorContent;
      element.file = sliderModelData.file;

      if (sliderModelData.file && sliderModelData.file.length > 0) {
        const newID = new mongoose.Types.ObjectId(sliderModelData.file[0]);
        const img = await MediaModel.findById(newID);
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
};



const handleUpdateCheckbox = async (req, res, next) => {
  const updateFields = {
    publish: req.params.publish,
  };
  handleUpdateCommon(req, res, sliderModel, updateFields, next);
};



const handleDelete = async (req, res, next) => {
  handleCommonDelete(sliderModel, req.params.id, res, next);
};



const handleEdit = async (req, res, next) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new NodeError(400, "Invalid ID");
    }
    const formData = await sliderModel.findById(req.params.id);
    if (!formData) {

      throw new NodeError(400, "Data not found");

    }

    // Fetch the image data associated with the slide
    const imageId =
      formData.file && formData.file.length > 0 ? formData.file[0] : null;
    const imageData = imageId ? await MediaModel.findById(imageId) : null;

    // Construct the response object with form data and image details
    const responseData = {
      formData: {
        _id: formData._id,
        title: formData.title,
        publish: formData.publish,
        editorContent: formData.editorContent,
        file: formData.file,
      },
      imageData: imageData
        ? {
            _id: imageData._id,
            filename: imageData.filename,
            // Add other image properties you may need
          }
        : null,
    };
    sendResponse(res, 200, responseData);
  } catch (error) {
    handleError(error, res);

    console.error("Error fetching data:", error);
    next(error);
  }
};

const handleUpdate = async (req, res, next) => {
  try {
    // Check if a new file is being uploaded
    let file;
    if (req.file) {
      file = req.file.path; // Assuming multer is being used to handle file uploads
    } else {
      file = req.body.file; // If no new file is uploaded, retain the existing file path
    }

    const updatedFormData = await sliderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          publish: req.body.publish,
          title: req.body.title,
          editorContent: req.body.editorContent,
          file: file, // Updated file path
        },
      },
      { new: true }
    );

    if (!updatedFormData) {
      throw new NodeError(400, "Data not found");

    }
    sendResponse(res, 200, updatedFormData)
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};


const handleFrontendDataShow = async (req, res, next) => {
  try {
    const imageData = await sliderModel.find({ publish: 1 });
    let arr = [];

    for (let index = 0; index < imageData.length; index++) {
      const sliderModelData = imageData[index];

      let element = {};
      element.autoID = sliderModelData._id;
      element.title = sliderModelData.title;
      element.publish = sliderModelData.publish;
      element.editorContent = sliderModelData.editorContent;
      element.file = sliderModelData.file;

      if (sliderModelData.file && sliderModelData.file.length > 0) {
        const newID = new mongoose.Types.ObjectId(sliderModelData.file[0]);
        const img = await MediaModel.findById(newID);
        if (img) {
          element.filename = img.filename;
        } else {
          element.filename = ""; // or some default value
        }
      } else {
        element.filename = ""; // or some default value
      }
      arr.push(element);
    }
    // console.log(arr);
    sendResponse(res, 200, arr);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};


module.exports = {
  handleGet,
  handlePost,
  handleUpdateCheckbox,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleGetwithoutImage,
  handleFrontendDataShow,
};
