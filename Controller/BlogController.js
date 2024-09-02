const blogModel = require("../Model/BlogModel");
const mongoose = require("mongoose");
const MediaModel = require("../Model/BlogFileuploadModel");
const CategoryModel = require("../Model/CategoryModel");
const GlobalBlogModel = require("../Model/GlobalBlogModel");
const {
  handlePostCommon,
  handleGetCommon,
  handleUpdateCommon,
  handleCommonDelete,
  mapBlogData,
} = require("../utils/CommonHandler");
const NodeError = require("../Errors/NodeErr");
const { sendResponse, handleError } = require("../utils/responseHandler");


const handlePost = async (req, res, next) => {
const uniqueFields ={
  title: req.body.title
}
  handlePostCommon(req,res,blogModel,uniqueFields,next)
};


const handleGetwithoutImage = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(eq, res, blogModel, queryOptions, next)
};


const handleGet = async (req, res, next) => {
  try {
    const imageData = await blogModel.find();
    const arr = [];

    for (let index = 0; index < imageData.length; index++) {
      const blogModelData = imageData[index];
      const element = await mapBlogData(blogModelData);
      arr.push(element);
    }
    res.status(200).json(arr);
  } catch (error) {
    handleError(error, res);
        next(error);
  }
};


const handleGetCategory = async (req, res, next) => {
   const queryOptions = {};
handleGetCommon(req, res, CategoryModel, queryOptions, next)
};


const handleUpdateCheckbox = async (req, res, next) => {
  const updateFields = {
    publish: req.params.publish,
  };
  handleUpdateCommon(req, res, blogModel, updateFields, next);
}


const handleUpdateCheckbox2 = async (req, res, next) => {
  const updateFields = {
    frontpage: req.params.frontpage, 
  }
  handleUpdateCommon(req, res, blogModel, updateFields, next);
}


const handleDelete = async (req, res, next) => {
  handleCommonDelete(blogModel, req.params.id, res, next)
}


const handleEdit = async (req, res, next) => {
  try {
       if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw new NodeError(400, "Invalid ID");
      }
    const formData = await blogModel.findById(req.params.id);
    if (!formData) {
      throw new NodeError(404, "No data found");
    }
    // Fetch the image data associated with the slide
    const imageId =
  formData.file && formData.file.length > 0 ? formData.file[0] : null;
    const imageData = imageId ? await MediaModel.findById(imageId) : null;
    // Construct the response object with form data and image details
    const responseData = {
      formData: {
        _id: formData._id,
        title: formData.title,
        publish: formData.publish,
        editorContent: formData.editorContent,
        file: formData.file,
        category: formData.category,
        date: formData.date,
        slug: formData.slug,
        metatitle: formData.metatitle,
        metades: formData.metades,
        frontpage: formData.frontpage,
        selected: formData.selected,
      },
      imageData: imageData
        ? {
            _id: imageData._id,
            filename: imageData.filename,
            // Add other image properties you may need
          }
        : [],
    };
    sendResponse(res, 200, responseData);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
}


const handleUpdate = async (req, res, next) => {
  try {
    // Check if a new file is being uploaded
    let file;
    if (req.file) {
      file = req.file.path; // Assuming multer is being used to handle file uploads
    } else {
      file = req.body.file; // If no new file is uploaded, retain the existing file path
    }

    const updatedFormData = await blogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          publish: req.body.publish,
          title: req.body.title,
          editorContent: req.body.editorContent,
          category: req.body.category,
          date: req.body.date,
          slug: req.body.slug,
          metatitle: req.body.metatitle,
          metades: req.body.metades,
          selected: req.body.selected,
          frontpage: req.body.frontpage,

          file: file, // Updated file path
        },
      },
      { new: true }
    );

    if (!updatedFormData) {
      throw new NodeError(404, "No data found");
    }
    sendResponse(res, 200, updatedFormData,"Data updated successfully");

  } catch (error) {
    handleError(error, res);

    next(error);
  }
}


const handleBlogFrontendDataShow = async (req, res, next) => {
  try {
  const GlobalBlogData = await GlobalBlogModel.findOne({ disBlog: 1 });

  if (GlobalBlogData) {
    const imageData = await blogModel.find({ publish: 1 });
    const arr = await Promise.all(imageData.map(mapBlogData));

    res.status(200).json({ arr, GlobalBlogData });
  } else {
    sendResponse(res, 200, "No global blog data found");

    
  }
} catch (error) {
  handleError(error, res);
  next(error);
}

}


const handleRelatedBlogDataShow = async (req, res, next) => {
  const { category, slug } = req.params;

  try {
    const relatedBlogPosts = await blogModel.find({
      category,
      slug: { $ne: slug },
      publish: 1,
    });

    const arr = await Promise.all(
      relatedBlogPosts.map((blogModelData) => mapBlogData(blogModelData))
    );
    sendResponse(res, 200, arr);

    // res.status(200).json(arr);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};


const handleBlogDetailFrontendDataShow = async (req, res, next) => {
  const { slug } = req.params;

  try {
    const GlobalBlogData = await GlobalBlogModel.findOne({ disBlog: 1 });
    if (GlobalBlogData) {
      // Find the detailed blog post based on the slug
      const blogData = await blogModel.findOne({ slug, publish: 1 });
      if (!blogData) {
        return res.status(404).json({ message: "Blog not found" });
      }

      // Use the common function to map blog data
      const element = await mapBlogData(blogData);
      sendResponse(res, 200, element);

      // res.status(200).json(element);
    } else {

      sendResponse(res, 200, "Global blog data not found");

    }
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};


module.exports = {
  handleGet,
  handlePost,
  handleUpdateCheckbox,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleGetwithoutImage,
  handleGetCategory,
  handleBlogFrontendDataShow,
  handleUpdateCheckbox2,
  handleBlogDetailFrontendDataShow,
  handleRelatedBlogDataShow,
}
