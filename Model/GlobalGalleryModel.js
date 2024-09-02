const mongoose = require("mongoose");
const GlobalGallerySchema = new mongoose.Schema({
  disGallery: Number,
  imgPerPage: Number,
  imgPerRow: Number,
  smallThumbnail: Number,
  smallThumbnail2: Number,
  mediumThumbnail: Number,
  mediumThumbnail2: Number,
  thumbnailRatio: Number,
  disGallerySlug: String,
  smallThumbnailSlug: String,
  mediumThumbnailSlug: String,
  imgPerPageSlug:String,
  imgPerRowSlug:String,
  thumbnailRatioSlug:String
});

const GlobalGalleryModel = mongoose.model(
  "GlobalImgGalleryDatass",
  GlobalGallerySchema
);

module.exports = GlobalGalleryModel;
