const videoModel = require("../Model/VideoModel");
const GeneralSetting = require("../Model/GeneralSettingModel");

const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");
const handlePost = async (req, res, next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, videoModel, uniqueFields, next);
};

const handleGetVideo = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, videoModel, queryOptions, next);
};

const handleDelete = async (req, res, next) => {
  handleCommonDelete(videoModel, req.params.id, res, next);
};

const handleUpdateCheckbox = async (req, res, next) => {
  const updateFields = {
    publish: req.params.publish,
  };

  handleUpdateCommon(req, res, videoModel, updateFields, next);
};

const handleEdit = async (req, res, next) => {
  handleEditCommon(req, res, videoModel, next);
};

const handleUpdate = async (req, res, next) => {
  const updateFields = {
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    publish: req.body.publish,
  };

  handleUpdateCommon(req, res, videoModel, updateFields, next);
};

const handleVideoShowfrontend = async (req, res, next) => {
  try {
    const generalSetting = await GeneralSetting.findOne({ disVideo: 1 });
    // Check if the setting exists and disVideo is set to 1
    if (generalSetting) {
      const videoData = await videoModel.find({
        publish: 1,
      });

      res.status(200).json({
        generalSetting,
        videoData,
      });
    }
  } catch (error) {
    console.error("error in show data ");
    next(error);
  }
};

//for general setting
const handleFrontpageRadioUpdate = async (req, res, next) => {
  const updateFields = {
    frontpage: req.params.frontpage,
  };

  handleUpdateCommon(req, res, videoModel, updateFields, next);
};
module.exports = {
  handlePost,
  handleGetVideo,
  handleDelete,
  handleUpdateCheckbox,
  handleEdit,
  handleUpdate,
  handleVideoShowfrontend,
  handleFrontpageRadioUpdate,
};
