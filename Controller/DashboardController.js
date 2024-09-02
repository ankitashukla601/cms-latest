const pageModel = require("../Model/Pagemodel");
const menuModel = require("../Model/MenuModel");
const blogMOdel = require("../Model/BlogModel");
const mediaModel = require("../Model/MediamainPageModel");
const CommentModel = require("../Model/CommentModel");
const { sendResponse, handleError } = require("../utils/responseHandler");



const handlepageCount = async (req, res, next) => {
  try {
    const pageCount = await pageModel.countDocuments();
    const dashboardCount = {
      pageCount,
    };
    // console.log("PAGECOUNT"+pageCount);
    sendResponse(res, 200, dashboardCount);
    // res.status(200).json(dashboardCount);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};


const handleMenuCount = async (req, res, next) => {
  try {
    const menucount = await menuModel.countDocuments();
    console.log("menucount"+menucount);
    const dashboardCount2 = {
      menucount,
    };
    sendResponse(res, 200, dashboardCount2);
  } catch (error) {
    console.error("Error fetching dashboard :", error);   
     handleError(error, res);

    next(error);
  }
};


const handleCmntCount = async (req, res, next) => {
  try {
    const blogCount = await CommentModel.countDocuments();
    console.log("blogCount"+blogCount);
    const dashboardCount2 = {
      blogCount,
    };
    sendResponse(res, 200, dashboardCount2);

  } catch (error) {
     handleError(error, res);
     console.error("Error fetching dashboard :", error);
    next(error);
  }
};


const handleMediaCount = async (req, res, next) => {
  try {
    const MediaCount = await mediaModel.countDocuments();
    console.log("MediaCount"+MediaCount);
    const dashboardCount2 = {
      MediaCount,
    };
    sendResponse(res, 200, dashboardCount2);
  } catch (error) {     handleError(error, res);
    console.error("Error fetching dashboard :", error);
    next(error);
  }
}


module.exports = { handlepageCount,handleMenuCount,handleCmntCount, handleMediaCount};
