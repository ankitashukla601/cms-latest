const settingModel = require("../Model/SettingModel");

const handlePost = async (req, res, next) => {
  try {
    const formData = new settingModel({
      title: req.body.title,
      description: req.body.description,
      keyword: req.body.keyword,
    });
    // console.log(formData);
    await formData.save();
    res.status(201).json(formData);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const handleGet = async (req, res, next) => {
  try {
    const formData = await settingModel.find()
    res.status(200).json(formData);

  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  handlePost,handleGet
};
