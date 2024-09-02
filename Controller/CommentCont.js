// controllers/commentController.js
const CommentModel = require("../Model/CommentModel");
const GlobalBlogModel = require("../Model/GlobalBlogModel");
const BlogModel = require('../Model/BlogModel')
const mongoose = require('mongoose');  // Ensure mongoose is required at the top
const {
  handlePostCommon,
} = require("../utils/CommonHandler");


exports.createComment = async (req, res, next) => {
  const uniqueFields = {};
  handlePostCommon(req, res, CommentModel, uniqueFields, next);  
}


exports.getComments = async (req, res) => {
  try {
    const GlobalBlogresponse = await GlobalBlogModel.findOne({ blogCmnt: 1 });
    if (GlobalBlogresponse) {
      const comments = await CommentModel.find()
        .sort({ createdAt: -1 })

      res.status(200).json({ comments, GlobalBlogresponse });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};



