// utils/commonHandlers.js

const mongoose = require("mongoose");
const MediaModel = require("../Model/BlogFileuploadModel");
const NodeError = require("../Errors/NodeErr");
const { sendResponse, handleError } = require("./responseHandler");

const handlePostCommon = async (req, res, model, uniqueFields, next) => {
  try {
    // Check for existing data based on unique fields if any
    if (Object.keys(uniqueFields).length > 0) {
      const existingData = await model.findOne(uniqueFields);
      if (existingData) {
        return sendResponse(res, 400, {
          error: "User with this name already exists",
        });
      }
    }
    // Handle file upload
    let requestData = { ...req.body };
    if (req.file) {
      requestData.filename = req.file.filename;
    }

    const formData = new model(requestData);

    await formData.save();

    sendResponse(res, 200, formData);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

const handleGetCommon = async (
  req,
  res,
  model,
  queryOptions = {},
  next,
  findOne = false
) => {
  try {
    let data;

    // Use findOne or find based on the flag
    if (findOne) {
      data = await model.findOne(queryOptions);
    } else {
      data = await model.find(queryOptions);
    }

    if (!data) {
      throw new NodeError(404, "No data found");
    }

    sendResponse(res, 200, data);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

// controllers/albumController.js
const handleGetCommonMenu= async (
  req,
  res,
  model,
  queryOptions = {},
  next,
  findOne = false,
  pagination = {}
) => {
  try {
    let data;

    if (findOne) {
      data = await model.findOne(queryOptions);
    } else {
      data = await model.find(queryOptions)
        .skip(pagination.skip)
        .limit(pagination.limit);
    }

    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error('No data found');
    }

    // If not findOne, also return total count for pagination purposes
    if (!findOne) {
      const totalCount = await model.countDocuments(queryOptions);
      sendResponse(res, 200, { data, totalCount });
    } else {
      sendResponse(res, 200, data);
    }
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

const handleGetCommonWithPagination = async (
  req,
  res,
  model,
  queryOptions = {},
  next,
  findOne = false,
  pagesize = 10, // Default page size
  page = 1
) => {
  try {
    let data;
    
    // If findOne is true, fetch a single document, otherwise, fetch with pagination
    if (findOne) {
      data = await model.findOne(queryOptions);
    } else {
      // Calculate the number of documents to skip for pagination
      const skip = (page - 1) * pagesize;

      // Retrieve paginated data
      data = await model.find(queryOptions);
    }

    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error("No data found");
    }

    // Calculate total count of documents matching the query
    const totalCount = await model.countDocuments(queryOptions);

    // Send response with data, total count, pagesize, and current page
    sendResponse(res, 200, { data, totalCount, pagesize, page });
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

const handleEditCommon = async (req, res, model, next) => {
  try {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NodeError(400, "Invalid ID");
    }

    // Fetch the data based on the provided ID
    const formData = await model.findById(id);
    if (!formData) {
      throw new NodeError(404, "No data found");
    }

    // Send the response using the common sendResponse function
    sendResponse(res, 200, formData);
  } catch (error) {
    console.error(error);
    handleError(error, res);
    next(error)
  }
};

const handleUpdateCommon = async (req, res, Model, updateFields, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new NodeError(400, "Invalid ID");
    }

    const updatedFormData = await Model.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedFormData) {
      throw new NodeError(404, "Form data not found");
    }

    sendResponse(res, 200, {
      message: "Form data updated successfully",
      updatedFormData,
    });
  } catch (error) {
    handleError(error, res);

    next(error);
  }
}

const handleCommonDelete = async (Model, id, res, next) => {
  try {
    const deletedData = await Model.findByIdAndDelete(id);
    if (!deletedData) {
      return sendResponse(res, 404, "Data not found");
    }
    return sendResponse(res, 200, "Data deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error);
    handleError(error, res);

    next(error);
  }
};
// handleCommonMenuData header,right left
const handleCommonMenuData = async (
  req,
  res,
  next,
  MenuModel,
  menuType,
  SubMenuModel,
  PageModel
) => {
  try {
    // Convert menuType to lowercase if necessary
    let menuTypeLower = menuType.toLowerCase();

    // Fetch main menu items based on menuType
    const aggregatedData = await MenuModel.find({
      menutype: menuType,
      publish: "yes",
    });

    let arr = [];

    for (const element of aggregatedData) {
      let pid = element._id;
      let submenuData = await SubMenuModel.find({ p_id: pid, publish: "yes" });

      let arr2 = [];
      let withoutSubmenu = {};

      if (submenuData.length > 0) {
        for (const element2 of submenuData) {
          let Page =
            element2.menulink !== "other"
              ? await PageModel.findOne({ _id: element2.menulink })
              : null;
          let json2 = {
            submenuName: element2.submenuname,
            submenupublish: element2.publish,
            submenulink: element2.menulink,
            submenuID: element2._id,
            subUrlLink: element2.subUrlLink,
            pageName: Page ? Page.name : null,
            pageID: Page ? Page._id : null,
            slug: Page ? Page.slug : null,
          };
          arr2.push(json2);
        }
      } else {
        let Page =
          element.menulink !== "other"
            ? await PageModel.findOne({ _id: element.menulink })
            : null;

        withoutSubmenu = {
          pageName: Page ? Page.name : null,
          pageID: Page ? Page._id : null,
          slug: Page ? Page.slug : null,
        };
      }

      let json = {
        menuName: element.name,
        menuType: element.menutype,
        menulink: element.menulink,
        urlLink: element.urlLink,
        menuID: element._id,
        submenu: arr2,
        pageData: withoutSubmenu,
      };

      arr.push(json);
    }

    res.status(200).json(arr);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

const handleCommonFileUpload = async (req, res, Model, fileField, next) => {
  try {
    // Check if the file exists in the request
    if (!req.file || !req.file.filename) {
      throw new NodeError(400, "File is required");
    }

    const formData = new Model({
      [fileField]: req.file.filename,
    });

    await formData.save();

    sendResponse(res, 200, formData);
  } catch (error) {
    handleError(error, res);
    next(error);
  }
};

const handleGetToAnotherCommon = async (req, res, model, next) => {
  try {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NodeError(400, "Invalid ID");
    }

    // Fetch the data based on the provided ID
    const formData = await model.findById(id);
    if (!formData) {
      throw new NodeError(404, "No data found");
    }

    // Send the response using the common sendResponse function
    sendResponse(res, 200, formData);
  } catch (error) {
    console.error(error);
    handleError(error, res);
    next(error);
  }
};

///blog data

const mapBlogData = async (blogModelData) => {
  let element = {
    autoID: blogModelData._id,
    title: blogModelData.title,
    publish: blogModelData.publish,
    editorContent: blogModelData.editorContent,
    file: blogModelData.file,
    category: blogModelData.category,
    date: blogModelData.date,
    slug: blogModelData.slug,
    metatitle: blogModelData.metatitle,
    metades: blogModelData.metades,
    frontpage: blogModelData.frontpage,
    selected: blogModelData.selected,
    filename: "", // Default value
  };

  if (blogModelData.file && blogModelData.file.length > 0) {
    const newID = new mongoose.Types.ObjectId(blogModelData.file[0]);
    const img = await MediaModel.findById(newID);
    if (img) {
      element.filename = img.filename;
    }
  }

  return element;
};

//dashboard
const handleCommonCount = async (req, res, model, responseKey, next) => {
  try {
    const count = await model.countDocuments();
    const dashboardCount = {
      [responseKey]: count,
    };
    res.status(200).json(dashboardCount);
  } catch (error) {
    console.error(`Error fetching ${responseKey} count:`, error);
    next(error);
  }
};

//general setting
const handleUpsert = async (req, res, Model, updateFields, next) => {
  try {
    let existingRecord = await Model.findOne();

    if (existingRecord) {
      // If the record exists, update it
      Object.assign(existingRecord, updateFields);
      await existingRecord.save();

      sendResponse(res, 200, existingRecord);
    } else {
      // If no record exists, create a new one
      const newRecord = new Model(updateFields);
      await newRecord.save();

      sendResponse(res, 201, newRecord);
    }
  } catch (error) {
    console.error(`Error handling ${Model.modelName}:`, error);
    next(error);
  }
};

module.exports = {
  handlePostCommon,handleGetCommonMenu,
  handleCommonDelete,
  handleEditCommon,
  handleUpdateCommon,
  handleGetCommon,
  handleCommonMenuData,
  handleCommonFileUpload,
  handleGetToAnotherCommon,
  mapBlogData,
  handleCommonCount,
  handleUpsert,
  handleGetCommonWithPagination,
};
