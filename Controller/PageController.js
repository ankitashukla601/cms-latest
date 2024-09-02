const PageModel = require("../Model/Pagemodel");
const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,handleGetCommonWithPagination
} = require("../utils/CommonHandler")


const handlePost = async (req, res, next) => {
  const uniqueFields = { name: req.body.name };
  handlePostCommon(req, res, PageModel, uniqueFields, next);
}


const handleGet = async (req, res, next) => {
  const queryOptions = {};

  const pagesize = parseInt(req.query.pagesize) || 3;
  const page = parseInt(req.query.page) || 1;
  
  // Call the common pagination handler
  await handleGetCommonWithPagination(req, res, PageModel, {}, next, false, pagesize, page);
  // handleGetCommon(req, res, PageModel, queryOptions, next);
}


const handleGetLandingToFrontend = async (req, res, next) => {
  const queryOptions = { slug: req.params.id };
  handleGetCommon(req, res, PageModel, queryOptions, next, true);
}


const handleGetFrontpageToHome = async (req, res, next) => {
  const queryOptions = {
    frontpage: 1,
    published: 1,
  };
  handleGetCommon(req, res, PageModel, queryOptions, next);
}


const handleFrontendDataShow = async (req, res, next) => {
  const queryOptions = {
    _id: req.params.id,
  };
  handleGetCommon(req, res, PageModel, queryOptions, next, true);
}


const handleEdit = async (req, res, next) => {
  handleEditCommon(req, res, PageModel, next);
}


const handleDelete = async (req, res, next) => {
  handleCommonDelete(PageModel, req.params.id, res, next);
}


const handleUpdate = async (req, res,next) => {
  const updateFields = {
    name: req.body.name,
    slug: req.body.slug,
    metatitle: req.body.metatitle,
    metades: req.body.metades,
    published: req.body.published,
    frontpage: req.body.frontpage,
    editorContent: req.body.editorContent,
    selected: req.body.selected,
    url: req.body.url,
  };
  handleUpdateCommon(req, res, PageModel, updateFields, next);
}


const handleFrontpageCheckboxUpdate = async (req, res,next) => {
  const updateFields = {
    frontpage: req.params.frontpage,
  };
  handleUpdateCommon(req, res, PageModel, updateFields, next);
}


const handlePublishpageCheckboxUpdate = async (req, res,next) => {
  const updateFields = {
    published: req.params.published,
  };
  handleUpdateCommon(req, res, PageModel, updateFields, next);
}


module.exports = {
  handlePost,
  handleGet,
  handleFrontendDataShow,
  handleEdit,
  handleDelete,
  handleUpdate,
  handlePublishpageCheckboxUpdate,
  handleFrontpageCheckboxUpdate,
  handleGetLandingToFrontend,
  handleGetFrontpageToHome,
};
