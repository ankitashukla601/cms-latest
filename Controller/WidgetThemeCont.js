const WidgetThemeModel = require("../Model/WidgetThemeModel");
const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");

const handlePost = async (req, res, next) => {


  const uniqueFields = { };
  handlePostCommon(req, res, WidgetThemeModel, uniqueFields, next);
 
};

const handleGet = async (req, res, next) => {


  const queryOptions = {};
  handleGetCommon(req, res, WidgetThemeModel, queryOptions, next);

};

const handleEdit = async (req, res,next) => {


  handleEditCommon(req, res, WidgetThemeModel, next);


};

const handleDelete = async (req, res,next) => {

  handleCommonDelete(WidgetThemeModel, req.params.id, res, next);


};

const handleUpdate = async (req, res,next) => {

  const updateFields = {
    title: req.body.title,

    editorContent: req.body.editorContent,
  };

  handleUpdateCommon(req, res, WidgetThemeModel, updateFields, next);
 
};

module.exports = {
  handlePost,
  handleGet,
  handleEdit,
  handleDelete,
  handleUpdate,
};
