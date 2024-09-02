const GlobalSmtpModel = require("../Model/GlobalSmtpModel");

const {
  handleUpsert,
  handleGetCommon,
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const updateFields = {
    host: req.body.host,
    username: req.body.username,
    password: req.body.password,
    port: req.body.port,
    settingSlug: req.body.settingSlug,
  };
  handleUpsert(req, res, GlobalSmtpModel, updateFields, next);
};


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, GlobalSmtpModel, queryOptions, next);
};


module.exports = {  handlePost, handleGet };
