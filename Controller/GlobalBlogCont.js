const GlobalBlogModel = require("../Model/GlobalBlogModel");
const {
  handleUpsert,
  handleGetCommon,
  
} = require("../utils/CommonHandler");
const handlePost = async (req, res, next) => {
  const fieldsToUpdate = {
    disBlog: req.body.disBlog,
    blogCmnt: req.body.blogCmnt,
    disBlogSlug: req.body.disBlogSlug,
    blogCmntSlug: req.body.blogCmntSlug,
    cmntApprove: req.body.cmntApprove,
    cmntApproveSlug: req.body.cmntApproveSlug,
    blogGrid: req.body.blogGrid,
    blogGridSlug: req.body.blogGridSlug,
    blogLayout: req.body.blogLayout,
    blogLayoutSlug: req.body.blogLayoutSlug,
    sidebarContent: req.body.sidebarContent,
    sidebarContentSlug: req.body.sidebarContentSlug,
    postPerPage: req.body.postPerPage,
    postPerPageSlug: req.body.postPerPageSlug,
  }
  handleUpsert(req, res, GlobalBlogModel, fieldsToUpdate, next);
}


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, GlobalBlogModel, queryOptions, next);
}


module.exports = { handlePost, handleGet };
