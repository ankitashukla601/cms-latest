const TemplateModel = require("../Model/TemplateModel");
const {
  handlePostCommon,
  handleGetCommon,
  
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const uniqueFields = { };
  handlePostCommon(req, res, TemplateModel, uniqueFields, next);
 
};


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, TemplateModel, queryOptions, next);
  };


  
module.exports = {
    handlePost,handleGet}