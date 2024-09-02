const AlbumModel = require("../Model/ManageAlbumModel");
const mongoose = require("mongoose");
const AlbumUploadModel = require("../Model/AlbumUploadModel");
const {
  handlePostCommon,
  handleGetCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");
const { sendResponse, handleError } = require("../utils/responseHandler");
const NodeError = require("../Errors/NodeErr");



const handlePost = async (req, res, next) => {
  const uniqueFields = { };
  handlePostCommon(req, res, AlbumModel, uniqueFields, next);
}



const handleGetwithoutImage= async (req, res,next) => {  const queryOptions = {};
handleGetCommon(req, res, AlbumModel, queryOptions, next);
}


// Fetch all slides
const handleGet = async (req, res, next) => {
  try {
    const imageData = await AlbumModel.find();
    let arr = [];

    for (let index = 0; index < imageData.length; index++) {
      const AlbumModelData = imageData[index];

      let element = {};
      element.autoID = AlbumModelData._id;
      element.title = AlbumModelData.title;
      element.publish = AlbumModelData.publish;
      element.editorContent = AlbumModelData.editorContent;
      element.file = AlbumModelData.file;

      let filenames = [];

      if (AlbumModelData.file && AlbumModelData.file.length > 0) {
        for (let fileId of AlbumModelData.file) {
          const newID = new mongoose.Types.ObjectId(fileId);
          const img = await AlbumUploadModel.findById(newID);
          if (img) {
            filenames.push(img.filename);
          } else {
            filenames.push(""); // or some default value
          }
        }
      }
      element.filenames = filenames;
      arr.push(element);    
    }
    sendResponse(res, 200, arr);

  } catch (error) {
    handleError(error, res);
    console.error("Error fetching Album:", error);
    next(error);
  }
}


const handleUpdateCheckbox = async (req, res, next) => {
  const updateFields = {
    publish: req.params.publish 
  };
  handleUpdateCommon(req, res, AlbumModel, updateFields, next);
};


const handleDelete = async (req, res, next) => {
    handleCommonDelete(AlbumModel, req.params.id, res, next);
}



const handleEdit = async (req, res, next) => {
  try {
     // Validate the ID
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new NodeError(400, "Invalid ID");
    }
    const albumData = await AlbumModel.findById(req.params.id);
    if (!albumData) {

      throw new NodeError(400, "Data not found");

    }
    // Fetch the image data associated with the slide
    let imageDetails = [];
    if (albumData.file && albumData.file.length > 0) {
      for (let fileId of albumData.file) {
        const img = await AlbumUploadModel.findById(fileId);
        if (img) {
          imageDetails.push({
            _id: img._id,
            filename: img.filename,
          });
        } else {
          imageDetails.push({
            _id: fileId, // include the file ID even if no image is found
            filename: "", // or some default value
          });
        }
      }
    }
    // Construct the response object with form data and image details
    const responseData = {
      albumData: {
        _id: albumData._id,
        title: albumData.title,
        editorContent: albumData.editorContent,
        publish: albumData.publish,
        file: albumData.file,
      },
      imageData: imageDetails,
    };
    sendResponse(res, 200, responseData);
    // res.status(200).json(responseData);
  } catch (error) {
    handleError(error, res);
    console.error("Error fetching data:", error);
    next(error);
  }
}


const handleUpdate = async (req, res, next) => {
  try {
    // Check if a new file is being uploaded
    let file;
    if (req.file) {
      file = req.file.path; // Assuming multer is being used to handle file uploads
    } else {
      file = req.body.file; // If no new file is uploaded, retain the existing file path
    }
    const updatedFormData = await AlbumModel.findByIdAndUpdate(
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
    sendResponse(res, 200, updatedFormData);
  } catch (error) {
    handleError(error, res);
    console.error("Error updating data:", error);
    next(error);
  }
}


const handleFrontendDataShow = async (req, res, next) => {
  try {
    const imageData = await AlbumModel.find({ publish: 1 });
    let arr = [];

    for (let index = 0; index < imageData.length; index++) {
      const AlbumModelData = imageData[index];
      let element = {};
      element.autoID = AlbumModelData._id;
      element.title = AlbumModelData.title;
      element.publish = AlbumModelData.publish;
      element.editorContent = AlbumModelData.editorContent;
      element.file = AlbumModelData.file;

      let filenames = [];

      if (AlbumModelData.file && AlbumModelData.file.length > 0) {
        for (let fileId of AlbumModelData.file) {
          const newID = new mongoose.Types.ObjectId(fileId);
          const img = await AlbumUploadModel.findById(newID);
          if (img) {
            filenames.push(img.filename);
          } else {
            filenames.push(""); // or some default value
          }
        }
      }
      element.filenames = filenames;
      arr.push(element);
        }
    sendResponse(res, 200, arr);
  } catch (error) {
    handleError(error, res);
    console.error("Error fetching slides:", error);
    next(error);
  }
}


module.exports = {
  handleGet,
  handlePost,
  handleUpdate,
  handleDelete,
  handleUpdateCheckbox,
  handleEdit,
  handleGetwithoutImage,
  handleFrontendDataShow
};
