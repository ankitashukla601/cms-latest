const { title } = require("process");
const newsletterModel = require("../Model/NewsletterModel");
const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");



const handlePost =
  // Create a new form
  async (req, res,next) => {
    const uniqueFields = { };
    handlePostCommon(req, res, newsletterModel, uniqueFields, next);
  };


const handleGet = async (req, res,next) => {
  const queryOptions = {};
  handleGetCommon(req, res, newsletterModel, queryOptions, next);
};


const handleEdit = async (req, res,next) => {
  handleEditCommon(req, res, newsletterModel, next);
};


const handleUpdate = async (req, res,next) => {
  const updateFields = {
    title: req.body.title,
    description: req.body.description,
    nameActive: req.body.nameActive,
    nameRequired: req.body.nameRequired,
    emailActive: req.body.emailActive,
    emailRequired: req.body.emailRequired,
    publish: req.body.publish,
  };
  handleUpdateCommon(req, res, newsletterModel, updateFields, next);
};


const handleDelete =  async (req, res,next) => {
    handleCommonDelete(newsletterModel, req.params.id, res, next);
  };


const handlePublishpageCheckboxUpdate = async (req, res,next) => {
  const updateFields = { publish: req.params.publish, };
  handleUpdateCommon(req, res, newsletterModel, updateFields, next);
};



const handleFrontendDataShow = async (req, res, next) => {
  const queryOptions = { publish: 1,};
  handleGetCommon(req, res, newsletterModel, queryOptions, next);
};



module.exports = {
  handlePost,
  handleGet,
  handleUpdate,
  handleDelete,
  handleEdit,
  handlePublishpageCheckboxUpdate,
  handleFrontendDataShow,
};
