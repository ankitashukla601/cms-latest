const GeneralSettingModel = require("../Model/GeneralSettingModel");
const {
  handleUpsert,
  handleGetCommon,
  handleUpdateCommon,
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const updateFields = {
    disVideo: req.body.disVideo,
    disContact: req.body.disContact,
    videoRow: req.body.videoRow,
    videoPage: req.body.videoPage,
    mail: req.body.mail,
    disVideoSlug: req.body.disVideoSlug,
    videoRowSlug: req.body.videoRowSlug,
    videoPageSlug: req.body.videoPageSlug,
    disContactSlug: req.body.disContactSlug,
    mailSlug: req.body.mailSlug,
  }
  handleUpsert(req, res, GeneralSettingModel, updateFields, next);
}


const handleUpdate = async (req, res, next) => {
  const updateFields = {
    disVideo: req.body.disVideo,
    disContact: req.body.disContact,
    videoRow: req.body.videoRow,
    videoPage: req.body.videoPage,
    mail: req.body.mail,
    disVideoSlug: req.body.disVideoSlug,
    videoRowSlug: req.body.videoRowSlug,
    videoPageSlug: req.body.videoPageSlug,
    disContactSlug: req.body.disContactSlug,
    mailSlug: req.body.mailSlug,
  }
  handleUpdateCommon(req, res, GeneralSettingModel, updateFields, next);
}


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, GeneralSettingModel, queryOptions, next);
}


module.exports = { handlePost, handleUpdate, handleGet };
