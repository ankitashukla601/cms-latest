const subscribersModel = require('../Model/SubscribersModel')
const {
  handlePostCommon,
  handleGetCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");


const handlePost = ( async (req, res,next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, subscribersModel, uniqueFields, next);
 
  })


  const handleGet = async (req, res,next) => {
    const queryOptions = {};
    handleGetCommon(req, res, subscribersModel, queryOptions, next);
  }  


  const handleDelete = async (req, res,next) => {
  handleCommonDelete(subscribersModel, req.params.id, res, next);
  }


  const handlePublishCheckboxUpdate = async (req, res,next) => {
    const updateFields = {
      publish: req.params.publish,
    };
    handleUpdateCommon(req, res, subscribersModel, updateFields, next);
  };


  module.exports={handlePost,handleGet,handlePublishCheckboxUpdate,handleDelete}