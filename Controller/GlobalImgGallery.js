const GlobalGalleryModel = require("../Model/GlobalGalleryModel");
const {
  handleUpsert,
  handleGetCommon,
} = require("../utils/CommonHandler")


const handlePost = async (req, res, next) => {
  const updateFields = {
    disGallery: req.body.disGallery,
        imgPerPage: req.body.imgPerPage,
        imgPerRow: req.body.imgPerRow,
        smallThumbnail: req.body.smallThumbnail,
        smallThumbnail: req.body.smallThumbnail2,
        thumbnailRatio: req.body.thumbnailRatio,
        mediumThumbnail: req.body.mediumThumbnail,
        mediumThumbnail: req.body.mediumThumbnail2,
        disGallerySlug: req.body.disGallerySlug,
        smallThumbnailSlug: req.body.smallThumbnailSlug,
        mediumThumbnailSlug: req.body.mediumThumbnailSlug,
        imgPerPageSlug: req.body.imgPerPageSlug,
        imgPerRowSlug: req.body.imgPerRowSlug,
        thumbnailRatioSlug: req.body.thumbnailRatioSlug,
  }
  handleUpsert(req, res, GlobalGalleryModel, updateFields, next);
}


const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, GlobalGalleryModel, queryOptions, next);
}


module.exports = { handlePost, handleGet };
