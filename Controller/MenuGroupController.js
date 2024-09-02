const MenuGroupModel = require("../Model/MenuGroupModel");
const {
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");

const { sendResponse, handleError } = require("../utils/responseHandler");


const handlePost = async (req, res, next) => {
  try {
    const groupData = new MenuGroupModel({
      groupName: req.body.groupName,
      publish: req.body.publish,
      slug: "gd_" + req.body.slug,
    });
    await groupData.save();
    sendResponse(res, 200, groupData);
  } catch (error) {
    handleError(error, res);
    console.error(error);
    next(error);
  }
};


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, MenuGroupModel, queryOptions, next);
};


const handleDelete = async (req, res, next) => {
  handleCommonDelete(MenuGroupModel, req.params.id, res, next);
};


const handleEdit = async (req, res, next) => {
  handleEditCommon(req, res, MenuGroupModel, next);
};


const handleUpdate = async (req, res, next) => {
  const updateFields = {
    groupName: req.body.groupName,
    publish: req.body.publish,
    slug: "gd_" + req.body.slug,
  };
  handleUpdateCommon(req, res, MenuGroupModel, updateFields, next);
};


const handleUpdateCheckBox = async (req, res, next) => {
  const updateFields = { publish: req.params.publish,};
  handleUpdateCommon(req, res, MenuGroupModel, updateFields, next);
};


module.exports = {
  handlePost,
  handleGet,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleUpdateCheckBox,
};
