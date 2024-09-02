const { MoonIcon } = require("@chakra-ui/icons");
const mongoose = require("mongoose");

const GenrealSettingSchema = new mongoose.Schema({
  name: String,
  disVideo: Number,
  disContact: Number,
  videoRow: Number,
  videoPage: Number,
  mail: String,
  disVideoSlug: String,
  videoRowSlug: String,
  videoPageSlug: String,
  disContactSlug:String,
  mailSlug:String
});

const GenrealSettingModel = mongoose.model(
  "GenrealSettingData",
  GenrealSettingSchema
);

module.exports = GenrealSettingModel;
