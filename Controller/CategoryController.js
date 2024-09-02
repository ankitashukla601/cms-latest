const { queries } = require("@testing-library/react");
const CategoryModel = require("../Model/CategoryModel");

const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const uniqueFields = { name: req.body.name };
  handlePostCommon(req, res, CategoryModel, uniqueFields, next);
}


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, CategoryModel, queryOptions, next);
}


const handleEdit = async (req, res, next) => {
  handleEditCommon(req, res, CategoryModel, next);
}


const handleUpdate = async (req, res, next) => {
  const updateFields = {
    name: req.body.name,
    slug: req.body.slug,
  }
  handleUpdateCommon(req, res, CategoryModel, updateFields, next);
}


const handleDelete = async (req, res, next) => {
  handleCommonDelete(CategoryModel, req.params.id, res, next);
}

module.exports = {
  handlePost,
  handleGet,
  handleDelete,
  handleEdit,
  handleUpdate,
};
