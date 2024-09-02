const MenuModel = require("../Model/MenuModel");
const PageModel = require("../Model/Pagemodel");
const SubMenuModel = require("../Model/SubmenuModel");

const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
  handleCommonMenuData,handleGetCommonMenu
} = require("../utils/CommonHandler");
const { sendResponse, handleError } = require("../utils/responseHandler");


const handlePost = async (req, res, next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, MenuModel, uniqueFields, next);
};


const handleFrontapgeHeaderData = async (req, res, next) => {
  const menuType = "Header menu first"; // Define the menu type you need
  handleCommonMenuData(
    req,
    res,
    next,
    MenuModel,
    menuType,
    SubMenuModel,
    PageModel
  );
};


const handleFrontapgeLeftMenuData = async (req, res, next) => {
  const menuType = "Left menu"; // Define the menu type you need
  handleCommonMenuData(
    req,
    res,
    next,
    MenuModel,
    menuType,
    SubMenuModel,
    PageModel
  );
};


const handleFrontapgeRightMenuData = async (req, res, next) => {
  const menuType = "Right menu"; // Define the menu type you need
  handleCommonMenuData(
    req,
    res,
    next,
    MenuModel,
    menuType,
    SubMenuModel,
    PageModel
  );
};


const handleGetMenuLinkData = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, PageModel, queryOptions, next);
};

const handleGetAllData = async (req, res, next) => {
  try {
    const { page , pagesize } = req.query;
    const pagination = {
      pagesize, // Use 'pagesize' to match the expected parameter
      page, // Ensure 'page' is correctly passed
    };
    const queryOptions = {};
    handleGetCommonMenu(req, res, MenuModel, queryOptions, next, false, pagesize, page)
  } catch (error) {
    console.error('Error in handleGetAllData:', error);
    next(error);
  }
};



const handleUpdateCheckbox = async (req, res, next) => {
  const updateFields = {
    publish: req.params.publish
   };
  handleUpdateCommon(req, res, MenuModel, updateFields, next);
};


const handleDelete = async (req, res, next) => {
  handleCommonDelete(MenuModel, req.params.id, res, next);
};


const handleEdit = async (req, res, next) => {
  handleEditCommon(req, res, MenuModel, next);
};


const handleUpdate = async (req, res, next) => {
  const updateFields = {
    name: req.body.name,
    menulink: req.body.menulink,
    menutype: req.body.menutype,
    publish: req.body.publish,
    urlLink: req.body.urlLink,
  };
  handleUpdateCommon(req, res, MenuModel, updateFields, next);
};


module.exports = {
  handlePost,
  handleFrontapgeHeaderData,
  handleGetMenuLinkData,
  handleGetAllData,
  handleUpdateCheckbox,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleFrontapgeRightMenuData,
  handleFrontapgeLeftMenuData,
};
