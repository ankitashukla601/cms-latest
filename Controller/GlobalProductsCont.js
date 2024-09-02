const GlobalProductModel = require("../Model/GlobalProductModel");
const {
  handleUpsert,
  handleGetCommon,
} = require("../utils/CommonHandler");



const handlePost = async (req, res, next) => {
  const updateFields = {
    description: req.body.description,
        enquiry: req.body.enquiry,
        disProduct: req.body.disProduct,
        productPerPage: req.body.productPerPage,
        productPerRow: req.body.productPerRow,
        descriptionSlug: req.body.descriptionSlug,
        enquirySlug: req.body.enquirySlug,
        disProductSlug: req.body.disProductSlug,
        productPerPageSlug: req.body.productPerPageSlug,
        productPerRowSlug: req.body.productPerRowSlug,
  }
  handleUpsert(req, res, GlobalProductModel, updateFields, next);
}



const handleGet = async (req, res, next) => {  const queryOptions = {};
handleGetCommon(req, res, GlobalProductModel, queryOptions, next);
};


module.exports = { handlePost, handleGet };
