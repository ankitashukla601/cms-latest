const SubMenuModel = require('../Model/SubmenuModel')
const MenuModel= require('../Model/MenuModel')
const PageModel = require('../Model/Pagemodel')

const mongoose = require('mongoose')
const SubmenuModel = require('../Model/SubmenuModel')
const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, SubMenuModel, uniqueFields, next);

}


const handleGetData = async (req, res,next) => {
  const queryOptions = {
    p_id: req.params.id
  };
  handleGetCommon(req, res, SubMenuModel, queryOptions, next);
  }


const handleGetParentSubmenu = async (req, res,next) => {
  const queryOptions = {_id: req.params.id };
  handleGetCommon(req, res, MenuModel, queryOptions, next, true);
  }


//for menu link-getting  page  data in  the menu  page
const handleGetPageData=  async (req, res,next) => {
  const queryOptions = {
  };
  handleGetCommon(req, res, PageModel, queryOptions, next);
  }



  const handleUpdateCheckbox = async (req, res,next) => {
    const updateFields = {
      publish: req.params.publish,
    };
    handleUpdateCommon(req, res, SubmenuModel, updateFields, next);
  }


  const handleDelete= async (req, res,next) => {
    handleCommonDelete(SubMenuModel, req.params.id, res, next);
  }


  const handleEdit= async (req, res,next) => {
    handleEditCommon(req, res, SubMenuModel, next);
  }


  const handleUpdate = async (req, res,next) => {
    const updateFields = {
      p_id: req.body.p_id,
      submenuname: req.body.submenuname,
      menulink: req.body.menulink,
      parentMenuName: req.body.parentMenuName,
      publish: req.body.publish,
      subUrlLink:req.body.subUrlLink
    };
    handleUpdateCommon(req, res, SubmenuModel, updateFields, next);
  }

  
module.exports = {handlePost,handleGetData,handleGetParentSubmenu,handleGetPageData,handleUpdateCheckbox,handleDelete,handleEdit,handleUpdate}