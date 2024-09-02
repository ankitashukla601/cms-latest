// //page controler

// const PageModel = require("../Model/Pagemodel");
// const mongoose = require("mongoose");
// const { sendResponse, handleError } = require("../utils/responseHandler");
// const NodeError = require("../Errors/NodeErr");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,handleUpdateCommon
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {
//   const uniqueFields = { name: req.body.name };
//   handlePostCommon(req, res, PageModel, uniqueFields, next);
//   // try {
//   //   const existingUser = await PageModel.findOne({ name: req.body.name });
//   //   if (existingUser) {
//   //     return res
//   //       .status(400)
//   //       .json({ error: "User with this name already exists" });
//   //   }
//   //   const formData = new PageModel({
//   //     name: req.body.name,
//   //     slug: req.body.slug,
//   //     metatitle: req.body.metatitle,
//   //     metades: req.body.metades,
//   //     published: req.body.published,
//   //     frontpage: req.body.frontpage,
//   //     editorContent: req.body.editorContent,
//   //     selected: req.body.selected,
//   //     url: req.body.url,
//   //   });
//   //   // console.log(formData);
//   //   await formData.save();

//   //   sendResponse(res, 200, formData);
//   // } catch (error) {
//   //   handleError(error, res);
//   //   next(error);
//   // }
// };
// const handleGet = async (req, res, next) => {
//   const queryOptions = {};
//   handleGetCommon(req, res, PageModel, queryOptions, next);
//   // try {
//   //   const formData = await PageModel.find();
//   //   sendResponse(res, 201, formData);

//   //   // res.status(200).json(formData);
//   // } catch (error) {
//   //   handleError(error, res);
//   //   next(error);
//   // }
// };

// const handleGetLandingToFrontend = async (req, res, next) => {

//   const queryOptions = { slug: req.params.id };

//   handleGetCommon(req, res, PageModel, queryOptions, next,true);

//   // try {
//   //   const formData = await PageModel.findOne({
//   //     slug: req.params.id,
//   //   });

//   //   if (!formData) {
//   //     return res.status(404).json({ message: "Data not found" });
//   //   }

//   //   sendResponse(res, 201, formData);

//   //   // res.status(200).json(formData);
//   // } catch (error) {
//   //   handleError(error, res);
//   //   next(error);
//   // }
// };

// const handleGetFrontpageToHome = async (req, res, next) => {

//   const queryOptions = {
//     frontpage: 1,
//     published: 1,
//   }

//   handleGetCommon(req, res, PageModel, queryOptions, next);
//   // try {
//   //   // Find all pages with frontpage value of 1 and published status of 1
//   //   const pages = await PageModel.find({
//   //     frontpage: 1,
//   //     published: 1,
//   //   });

//   //   // if (pages.length === 0) {
//   //   //   return res.status(404).json({ message: "No frontpage data found" });
//   //   // }
//   //   sendResponse(res, 201, pages);

//   //   // res.status(200).json(pages);
//   // } catch (error) {
//   //   handleError(error, res);
//   //   next(error);
//   // }
// };

// const handleFrontendDataShow = async (req, res, next) => {
//   const queryOptions = {
//     _id: req.params.id,
//     // Add additional conditions if necessary
//   };
//   handleEditCommon(req, res, PageModel, queryOptions, next,true);


//   // try {
//   //   // Assuming you have a 'slug' field in your schema

//   //   // Add additional query conditions
//   //   const formData = await PageModel.findOne({
//   //     _id: req.params.id,
//   //     // published: 1,
//   //   });

//   //   if (!formData) {
//   //     return res.status(404).json({ message: "Page not published" });
//   //   }
//   //   sendResponse(res, 201, formData);

//   //   // res.status(200).json(formData);
//   // } catch (error) {
//   //   handleError(error, res);

//   //   next(error);
//   // }
// };

// const handleEdit = async (req, res, next) => {
//   handleEditCommon(req, res, PageModel,queryOptions, next);
//   // try {

//   //   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//   //     throw new NodeError(400, "Invalid ID ");
//   //   }

//   //   const formData = await PageModel.findOne({ _id: req.params.id });
//   //   if (!formData) {
//   //     throw new NodeError(400, "No data found");
//   //   }
//   //   sendResponse(res, 201, formData);

//   //   // res.status(200).json(formData);
//   // } catch (error) {
//   //   console.error(error);
//   //   handleError(error, res);

//   //   next(error);
//   // }
// };

// const handleDelete = async (req, res, next) => {
//   handleCommonDelete(PageModel, req.params.id, res, next);
// };

// const handleUpdate = async (req, res) => {

//   const updateFields = {
//     name: req.body.name,
//     slug: req.body.slug,
//     metatitle: req.body.metatitle,
//     metades: req.body.metades,
//     published: req.body.published,
//     frontpage: req.body.frontpage,
//     editorContent: req.body.editorContent,
//     selected: req.body.selected,
//     url: req.body.url,
//   };

//   handleUpdateCommon(req, res, PageModel, updateFields, next);
//   // try {
//   //   const updatedFormData = await PageModel.findByIdAndUpdate(
//   //     req.params.id,
//   //     {
//   //       $set: {
//   //         name: req.body.name,
//   //         slug: req.body.slug,
//   //         metatitle: req.body.metatitle,
//   //         metades: req.body.metades,
//   //         published: req.body.published,
//   //         frontpage: req.body.frontpage,
//   //         editorContent: req.body.editorContent,
//   //         selected: req.body.selected,
//   //         url: req.body.url,
//   //       },
//   //     },
//   //     { new: true }
//   //   );

//   //   if (!updatedFormData) {
//   //     return res.status(404).json({ error: "Form data not found" });
//   //   }
//   //   res
//   //     .status(200)
//   //     .json({ message: "Form data updated successfully", updatedFormData });
//   // } catch (error) {
//   //   console.error("Error updating form data:", error);
//   //   res.status(500).json({ error: "Internal Server Error" });
//   // }
// };

// const handleFrontpageCheckboxUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await PageModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           frontpage: req.params.frontpage,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const handlePublishpageCheckboxUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await PageModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           published: req.params.published,
//           // Update other fields as needed
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = {
//   handlePost,
//   handleGet,
//   handleFrontendDataShow,
//   handleEdit,
//   handleDelete,
//   handleUpdate,
//   handlePublishpageCheckboxUpdate,
//   handleFrontpageCheckboxUpdate,
//   handleGetLandingToFrontend,
//   handleGetFrontpageToHome,
// };



// //menu 

// const MenuModel = require("../Model/MenuModel");
// const PageModel = require("../Model/Pagemodel");
// const SubMenuModel = require("../Model/SubmenuModel");
// const mongoose = require("mongoose");
// const NodeError = require("../Errors/NodeErr");
// const { handlePostCommon, handleGetCommon, handleEditCommon,handleCommonDelete,handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const { sendResponse, handleError } = require("../utils/responseHandler");
// const handlePost = async (req, res, next) => {
//   try {

//     const uniqueFields = { name: req.body.name };

//     handlePostCommon(req, res, MenuModel, uniqueFields, next);

//     const menuData = new MenuModel({
//       name: req.body.name,
//       menutype: req.body.menutype,
//       menulink: req.body.menulink,
//       publish: req.body.publish,
//       urlLink: req.body.urlLink,
//     });
//     await menuData.save();
//     // console.log("menudta on submission" + menuData);
//     // res.status(201).json(menuData);
//     sendResponse(res, 200, menuData);
//   } catch (error) {
//     handleError(error, res);
//   }
// };

// const handleFrontapgeHeaderData = async (req, res, next) => {
//   try {
//     let menutypeinLower = "Header menu first".toLocaleLowerCase();
//     // console.log("menutypeinLower",menutypeinLower)
//     const aggregatedData = await MenuModel.find({
//       menutype: "Header menu first",
//       publish: "yes",
//     });
//     // console.log("Aggregated Data:", aggregatedData);

//     let arr = [];

//     for (const key in aggregatedData) {
//       const element = aggregatedData[key];
//       let pid = element._id;
//       let submenuData = await SubMenuModel.find({ p_id: pid, publish: "yes" });
//       // console.log("Submenu Data Length:", submenuData);

//       let arr2 = [];
//       let withoutSubmenu = {};

//       if (submenuData.length > 0) {
//         for (const element2 of submenuData) {
//           // Check if menulink is not "other"
//           let Page =
//             element2.menulink !== "other"
//               ? await PageModel.findOne({ _id: element2.menulink })
//               : null;
//           let json2 = {
//             submenuName: element2.submenuname,
//             submenupublish: element2.publish,
//             submenulink: element2.menulink,
//             submenuID: element2._id,
//             subUrlLink: element2.subUrlLink,
//             pageName: Page ? Page.name : null,
//             pageID: Page ? Page._id : null,
//             slug: Page ? Page.slug : null,
//           };
//           arr2.push(json2);
//         }
//       } else {
//         let Page =
//           element.menulink !== "other"
//             ? await PageModel.findOne({ _id: element.menulink })
//             : null;
//         // let Page = await PageModel.findOne({ _id: element.menulink });
//         // console.log("Page Data Without Submenu:", Page);

//         withoutSubmenu = {
//           pageName: Page ? Page.name : null,
//           pageID: Page ? Page._id : null,
//           slug: Page ? Page.slug : null,
//         };
//       }

//       let json = {
//         menuName: element.name,
//         menuType: element.menutype,
//         menulink: element.menulink,
//         urlLink: element.urlLink,
//         menuID: element._id,
//         submenu: arr2,
//         pageData: withoutSubmenu,
//       };

//       arr.push(json);
//     }

//     res.status(200).json(arr);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };
// const handleFrontapgeLeftMenuData = async (req, res, next) => {
//   try {
//     const aggregatedData = await MenuModel.find({
//       menutype: "Left menu",
//       publish: "yes",
//     });
//     // console.log("Aggregated Data:", aggregatedData);

//     let arr = [];

//     for (const key in aggregatedData) {
//       const element = aggregatedData[key];
//       let pid = element._id;
//       let submenuData = await SubMenuModel.find({ p_id: pid, publish: "yes" });
//       // console.log("Submenu Data Length:", submenuData);

//       let arr2 = [];
//       let withoutSubmenu = {};

//       if (submenuData.length > 0) {
//         for (const key2 in submenuData) {
//           const element2 = submenuData[key2];
//           // let Page = await PageModel.findOne({ _id: element2.menulink });
//           let Page =
//             element2.menulink !== "other"
//               ? await PageModel.findOne({ _id: element2.menulink })
//               : null;

//           let json2 = {
//             submenuName: element2.submenuname,
//             submenupublish: element2.publish,
//             submenulink: element2.menulink,
//             submenuID: element2._id,
//             subUrlLink: element2.subUrlLink,
//             pageName: Page ? Page.name : null,
//             pageID: Page ? Page._id : null,
//             slug: Page ? Page.slug : null,
//           };
//           arr2.push(json2);
//         }
//       } else {
//         // let Page = await PageModel.findOne({ _id: element.menulink });
//         // console.log("Page Data Without Submenu:", Page);
//         let Page =
//           element.menulink !== "other"
//             ? await PageModel.findOne({ _id: element.menulink })
//             : null;
//         withoutSubmenu = {
//           pageName: Page ? Page.name : null,
//           pageID: Page ? Page._id : null,
//           slug: Page ? Page.slug : null,
//         };
//       }

//       let json = {
//         menuName: element.name,
//         menuType: element.menutype,
//         menulink: element.menulink,
//         urlLink: element.urlLink,
//         menuID: element._id,
//         submenu: arr2,
//         pageData: withoutSubmenu,
//       };

//       arr.push(json);
//     }

//     res.status(200).json(arr);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };
// const handleFrontapgeRightMenuData = async (req, res, next) => {
//   try {
//     const aggregatedData = await MenuModel.find({
//       menutype: "Right menu",
//       publish: "yes",
//     });
//     // console.log("Aggregated Data:", aggregatedData);

//     let arr = [];

//     for (const key in aggregatedData) {
//       const element = aggregatedData[key];
//       let pid = element._id;
//       let submenuData = await SubMenuModel.find({ p_id: pid, publish: "yes" });
//       // console.log("Submenu Data Length:", submenuData);

//       let arr2 = [];
//       let withoutSubmenu = {};

//       if (submenuData.length > 0) {
//         for (const key2 in submenuData) {
//           const element2 = submenuData[key2];

//           let Page =
//             element2.menulink !== "other"
//               ? await PageModel.findOne({ _id: element2.menulink })
//               : null;
//           // let Page = await PageModel.findOne({ _id: element2.menulink });
//           // console.log("Page Data WITH submenu:", Page);

//           let json2 = {
//             submenuName: element2.submenuname,
//             submenupublish: element2.publish,
//             submenulink: element2.menulink,
//             submenuID: element2._id,
//             subUrlLink: element2.subUrlLink,
//             pageName: Page ? Page.name : null,
//             pageID: Page ? Page._id : null,
//             slug: Page ? Page.slug : null,
//           };
//           arr2.push(json2);
//         }
//       } else {
//         let Page =
//           element.menulink !== "other"
//             ? await PageModel.findOne({ _id: element.menulink })
//             : null;
//         // let Page = await PageModel.findOne({ _id: element.menulink });
//         // console.log("Page Data Without Submenu:", Page);

//         withoutSubmenu = {
//           pageName: Page ? Page.name : null,
//           pageID: Page ? Page._id : null,
//           slug: Page ? Page.slug : null,
//         };
//       }

//       let json = {
//         menuName: element.name,
//         menuType: element.menutype,
//         menulink: element.menulink,
//         urlLink: element.urlLink,
//         menuID: element._id,
//         submenu: arr2,
//         pageData: withoutSubmenu,
//       };

//       arr.push(json);
//     }

//     res.status(200).json(arr);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// const handleGetMenuLinkData = async (req, res, next) => {
//   try {
//     const formData = await PageModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// const handleGetAllData = async (req, res, next) => {
//   try {
//     const formData = await MenuModel.find();
//     console.log("Fetched data:", formData); // Log the fetched data
//     res.status(200).json(formData);
//   } catch (error) {
//     handleError(error, res);
//   }
// };

// const handleUpdateCheckbox = async (req, res, next) => {
//   console.log(req.params);
//   try {
//     const updatedFormData = await MenuModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.params.publish,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const deletedFormData = await MenuModel.findByIdAndDelete(req.params.id);
//     if (!deletedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res.status(200).json({ message: "Form data deleted successfully" });
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// const handleEdit = async (req, res, next) => {
//   try {
//     // Check if the ID is a valid MongoDB ObjectId
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       throw new NodeError(400, "Invalid ID ");
//     }

//     const menuData = await MenuModel.findOne({ _id: req.params.id });
//     if (!menuData) {
//       throw new NodeError(400, "No data found");
//     }

//     res.status(200).json(menuData);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// const handleUpdate = async (req, res, next) => {
//   try {
//     const updatedFormData = await MenuModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           name: req.body.name,
//           menulink: req.body.menulink,
//           menutype: req.body.menutype,
//           publish: req.body.publish,
//           urlLink: req.body.urlLink,
//         },
//       },
//       { new: true }
//     );

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// // const handleFrontapgeFooterData = async (req, res, next) => {
// //   try {
// //     const formData = await MenuModel.find({ menutype: " Footer menu(active)" });
// //     res.status(200).json(formData);
// //   } catch (error) {
// //     console.error(error);
// //     next(error);
// //   }
// // };
// // const handleFrontapgeLeftSideData = async (req, res, next) => {
// //   try {
// //     const formData = await MenuModel.find({
// //       menutype: "Left side bar (active)",
// //     });
// //     res.status(200).json(formData);
// //   } catch (error) {
// //     console.error(error);
// //     next(error);
// //   }
// // };
// module.exports = {
//   handlePost,
//   handleFrontapgeHeaderData,
//   handleGetMenuLinkData,
//   handleGetAllData,
//   handleUpdateCheckbox,
//   handleDelete,
//   handleEdit,
//   handleUpdate,

//   handleFrontapgeRightMenuData,
//   handleFrontapgeLeftMenuData,
// };



//album
// const AlbumUploadModel = require("../Model/AlbumUploadModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {
//   try {
//     const AlbumUploadData = new AlbumUploadModel({
//       filename: req.file.filename,
//     });
//     await AlbumUploadData.save();
//     // console.log(AlbumUploadData)
//     res.status(200).send("AlbumUploadData  saved successfully!");
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleGetImgtoPopup = async (req, res, next) => {
//   try {
//     const AlbumUploadData = await AlbumUploadModel.find();
//     res.status(200).json(AlbumUploadData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleAddImgToAnotherPage = async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const formData = await AlbumUploadModel.findById(id);
//     if (!formData) {
//       // console.log(`No data found for ID: ${id}`);
//       return res.status(404).json({ error: "Image not found" });
//     }
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };
// module.exports = { handlePost, handleGetImgtoPopup, handleAddImgToAnotherPage };




//blogmodel 
// const blogModel = require("../Model/BlogModel");
// const mongoose = require("mongoose");
// const MediaModel = require("../Model/BlogFileuploadModel");
// const CategoryModel = require("../Model/CategoryModel");
// const GlobalBlogModel = require("../Model/GlobalBlogModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {
// const uniqueFields ={
//   title: req.body.title
// }
//   handlePostCommon(req,res,blogModel,uniqueFields,next)
//   try {
//     const existingUser = await blogModel.findOne({ title: req.body.title });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ error: "User with this name already exists" });
//     }
//     console.log("Request body:", req.body);
//     // const existingUser = await blogModel.findOne({ title: req.body.title });
//     // if (existingUser) {
//     //   return res
//     //     .status(400)
//     //     .json({ error: "User with this name already exists" });
//     // }

//     const newSlide = new blogModel({
//       title: req.body.title,
//       publish: req.body.publish,
//       editorContent: req.body.editorContent,
//       file: req.body.file,
//       category: req.body.category,
//       date: req.body.date,
//       slug: req.body.slug,
//       metatitle: req.body.metatitle,
//       metades: req.body.metades,
//       frontpage: req.body.frontpage,
//       selected: req.body.selected,
//     });
//     await newSlide.save();
//     // console.log("Slide added successfully:", newSlide);
//     res.status(201).json(newSlide);
//   } catch (error) {
//     console.error("Error adding slide:", error);
//     next(error);
//   }
// };
// const handleGetwithoutImage = async (req, res, next) => {
//   try {
//     const formData = await blogModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// // Fetch all slides with image
// const handleGet = async (req, res, next) => {
//   try {
//     const imageData = await blogModel.find();
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const blogModelData = imageData[index];

//       let element = {};
//       element.autoID = blogModelData._id;
//       element.title = blogModelData.title;
//       element.publish = blogModelData.publish;
//       element.editorContent = blogModelData.editorContent;
//       element.file = blogModelData.file;
//       element.category = blogModelData.category;
//       element.date = blogModelData.date;
//       element.slug = blogModelData.slug;
//       element.metatitle = blogModelData.metatitle;
//       element.metades = blogModelData.metades;
//       element.frontpage = blogModelData.frontpage;
//       element.selected = blogModelData.selected;

//       if (blogModelData.file && blogModelData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(blogModelData.file[0]);
//         const img = await MediaModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = ""; // or some default value
//         }
//       } else {
//         element.filename = ""; // or some default value
//       }
//       arr.push(element);
//     }
//     // console.log(arr);

//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };

// const handleGetCategory = async (req, res, next) => {
//   try {
//     const formData = await CategoryModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleUpdateCheckbox = async (req, res, next) => {
//   try {
//     const updatedFormData = await blogModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.params.publish,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next();
//   }
// };
// const handleUpdateCheckbox2 = async (req, res, next) => {
//   try {
//     const updatedFormData = await blogModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           frontpage: req.params.frontpage,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next();
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const groupData = await blogModel.findByIdAndDelete(req.params.id);
//     if (!groupData) {
//       return res.status(404).json({ error: "Data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     next(error);
//   }
// };

// const handleEdit = async (req, res, next) => {
//   try {
//     const formData = await blogModel.findById(req.params.id);
//     if (!formData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Fetch the image data associated with the slide
//     const imageId =
//       formData.file && formData.file.length > 0 ? formData.file[0] : null;
//     const imageData = imageId ? await MediaModel.findById(imageId) : null;

//     // Construct the response object with form data and image details
//     const responseData = {
//       formData: {
//         _id: formData._id,
//         title: formData.title,
//         publish: formData.publish,
//         editorContent: formData.editorContent,
//         file: formData.file,
//         category: formData.category,
//         date: formData.date,
//         slug: formData.slug,
//         metatitle: formData.metatitle,
//         metades: formData.metades,
//         frontpage: formData.frontpage,
//         selected: formData.selected,
//       },
//       imageData: imageData
//         ? {
//             _id: imageData._id,
//             filename: imageData.filename,
//             // Add other image properties you may need
//           }
//         : [],
//     };

//     res.status(200).json(responseData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     next(error);
//   }
// };

// const handleUpdate = async (req, res, next) => {
//   try {
//     // Check if a new file is being uploaded
//     let file;
//     if (req.file) {
//       file = req.file.path; // Assuming multer is being used to handle file uploads
//     } else {
//       file = req.body.file; // If no new file is uploaded, retain the existing file path
//     }

//     const updatedFormData = await blogModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.body.publish,
//           title: req.body.title,
//           editorContent: req.body.editorContent,
//           category: req.body.category,
//           date: req.body.date,
//           slug: req.body.slug,
//           metatitle: req.body.metatitle,
//           metades: req.body.metades,
//           selected: req.body.selected,
//           frontpage: req.body.frontpage,

//           file: file, // Updated file path
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating data:", error);
//     next(error);
//   }
// };

// const handleBlogFrontendDataShow = async (req, res, next) => {
//   try {
//     const GlobalBlogData = await GlobalBlogModel.findOne({ disBlog: 1 });

//     if (GlobalBlogData) {
//       const imageData = await blogModel.find({ publish: 1 });
//       let arr = [];

//       for (let index = 0; index < imageData.length; index++) {
//         const blogModelData = imageData[index];

//         let element = {};
//         element.autoID = blogModelData._id;
//         element.title = blogModelData.title;
//         element.publish = blogModelData.publish;
//         element.editorContent = blogModelData.editorContent;
//         element.file = blogModelData.file;
//         element.category = blogModelData.category;
//         element.date = blogModelData.date;
//         element.slug = blogModelData.slug;
//         element.metatitle = blogModelData.metatitle;
//         element.frontpage = blogModelData.frontpage;
//         element.selected = blogModelData.selected;

//         if (blogModelData.file && blogModelData.file.length > 0) {
//           const newID = new mongoose.Types.ObjectId(blogModelData.file[0]);
//           const img = await MediaModel.findById(newID);
//           if (img) {
//             element.filename = img.filename;
//           } else {
//             element.filename = ""; // or some default value
//           }
//         } else {
//           element.filename = ""; // or some default value
//         }
//         arr.push(element);
//       }
//       // console.log(arr);

//       res.status(200).json({ arr, GlobalBlogData });
//     }
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };

// const handleBlogDetailFrontendDataShow = async (req, res, next) => {
//   const { slug } = req.params;

//   try {
//     const GlobalBlogData = await GlobalBlogModel.findOne({ disBlog: 1 });
//     if (GlobalBlogData) {
//       // Find the detailed blog post based on the slug
//       const blogData = await blogModel.findOne({ slug, publish: 1 });
//       if (!blogData) {
//         return res.status(404).json({ message: "Blog not found" });
//       }
//       const element = {
//         autoID: blogData._id,
//         title: blogData.title,
//         publish: blogData.publish,
//         editorContent: blogData.editorContent,
//         file: blogData.file,
//         category: blogData.category,
//         date: blogData.date,
//         slug: blogData.slug,
//         metatitle: blogData.metatitle,
//         frontpage: blogData.frontpage,
//         selected: blogData.selected,
//       };

//       if (blogData.file && blogData.file.length > 0) {
//         try {
//           const newID = new mongoose.Types.ObjectId(blogData.file[0]);
//           const img = await MediaModel.findById(newID);
//           if (img) {
//             element.filename = img.filename;
//           }
//         } catch (mediaError) {
//           console.error("Error fetching media:", mediaError);
//         }
//       }

//       res.status(200).json(element);
//     }
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     next(error);
//   }
// };
// const handleRelatedBlogDataShow = async (req, res, next) => {
//   const { category, slug } = req.params;

//   try {
//     const relatedBlogPosts = await blogModel.find({
//       category,
//       slug: { $ne: slug },
//       publish: 1,
//     });
//     let arr = [];

//     for (let index = 0; index < relatedBlogPosts.length; index++) {
//       const blogModelData = relatedBlogPosts[index];

//       let element = {};
//       element.autoID = blogModelData._id;
//       element.title = blogModelData.title;
//       element.publish = blogModelData.publish;
//       element.editorContent = blogModelData.editorContent;
//       element.file = blogModelData.file;
//       element.category = blogModelData.category;
//       element.date = blogModelData.date;
//       element.slug = blogModelData.slug;
//       element.metatitle = blogModelData.metatitle;
//       element.metades = blogModelData.metades;
//       element.frontpage = blogModelData.frontpage;
//       element.selected = blogModelData.selected;

//       if (blogModelData.file && blogModelData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(blogModelData.file[0]);
//         const img = await MediaModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = ""; // or some default value
//         }
//       } else {
//         element.filename = ""; // or some default value
//       }
//       arr.push(element);
//     }
//     // console.log(arr);

//     res.status(200).json(arr);
//     // res.status(200).json(relatedBlogPosts);
//   } catch (error) {
//     console.error("Error fetching related blog data:", error);
//     next(error);
//   }
// };

// module.exports = {
//   handleGet,
//   handlePost,
//   handleUpdateCheckbox,
//   handleUpdate,
//   handleDelete,
//   handleEdit,
//   handleGetwithoutImage,
//   handleGetCategory,
//   handleBlogFrontendDataShow,
//   handleUpdateCheckbox2,
//   handleBlogDetailFrontendDataShow,
//   handleRelatedBlogDataShow,
// };



//blog uploads
// const MediaModel = require('../Model/BlogFileuploadModel')
// const {
  
//   handleGetCommon,
//   handleGetToAnotherCommon,
//   handleCommonFileUpload,
//   } = require("../utils/CommonHandler");

// const handlePost = ( async (req, res,next) => {
//   const fileField = "filename"
//   handleCommonFileUpload(req, res, MediaModel, fileField, next)
  
//     try {
//       const formData = new MediaModel({
//         filename: req.file.filename,
//       });
//       await formData.save();
//       // console.log(formData)
//       res.status(200).send("Form data saved successfully!");
//     } catch (error) {
//       console.error(error);
//      next(error)
//     }
//   })


//   const handleGetImgtoPopup = async (req, res,next) => {

//     const queryOptions = {};

//     handleGetCommon(req, res, MediaModel, queryOptions, next)
//     try {
//       const formData = await MediaModel.find();
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//      next(error)
//     }
//   }
//   module.exports={handlePost,handleGetImgtoPopup}



//categiry data 
// const { queries } = require('@testing-library/react');
// const CategoryModel = require('../Model/CategoryModel')


// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost=  async (req, res ,next) => {

//   const uniqueFields = { name: req.body.name };
//   handlePostCommon(req, res, CategoryModel, uniqueFields, next);
  //   try {
  //     const existingUser = await CategoryModel.findOne({ name: req.body.name });
  //     if (existingUser) {
  //       return res
  //         .status(400)
  //         .json({ error: "User with this name already exists" });
  //     }
  //     const formData = new CategoryModel({
  //       name: req.body.name,
  //       slug: req.body.slug,
  //     });
  //     // console.log(formData);
  //     await formData.save();
  //     res.status(201).json(formData);
  //   } catch (error) {
  //     console.error(error);
  //     next(error)

  // }
// }
// const handleGet= async (req, res ,next) => {
//   const queryOptions = {};
//   handleGetCommon(req,res,CategoryModel,queryOptions,next)
//     try {
//       const formData = await CategoryModel.find();
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//       next(error)

//     }
//   }
// const handleEdit= async (req, res ,next) => {

//   handleEditCommon(req, res, CategoryModel, next);

//     try {
//       const formData = await CategoryModel.findOne({ _id: req.params.id });
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//       next(error)

//     }
//   }
// const handleUpdate= async (req, res,next) => {
//     try {
//       const updatedFormData = await CategoryModel.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             name: req.body.name,
//             slug: req.body.slug,
//           },
//         },
//         { new: true }
//       );
  
//       if (!updatedFormData) {
//         return res.status(404).json({ error: "Form data not found" });
//       }
  
//       res
//         .status(200)
//         .json({ message: "Form data updated successfully", updatedFormData });
//     } catch (error) {
//       console.error("Error updating form data:", error);
//       next(error)

//     }
//   }


//   const handleDelete = async (req, res ,next) => {
//     try {
//       const groupData = await CategoryModel.findByIdAndDelete(req.params.id);
  
//       if (!groupData) {
//         return res.status(404).json({ error: " data not found" });
//       }
//       return res.status(200).json({ message: "Data deleted successfully" });
//     } catch (error) {
//       console.error("Error in deleting the data", error);
  
//       next(error)
//     }
//   }

 


// module.exports = {
//     handlePost,
//     handleGet,
//     handleDelete,
//     handleEdit,
//     handleUpdate,
//   }



//comment controller
// controllers/commentController.js
// const CommentModel = require("../Model/CommentModel");
// const GlobalBlogModel = require("../Model/GlobalBlogModel");
// const BlogModel = require('../Model/BlogModel')
// const mongoose = require('mongoose');  // Ensure mongoose is required at the top

// exports.createComment = async (req, res, next) => {
//   try {
//     const { name, email, comments } = req.body;
//     const newComment = new CommentModel({
//       name,
//       email,
//       comments,

//     });

//     await newComment.save();

//     res.status(201).json({ message: "Comment added successfully", comment: newComment });
//   } catch (error) {
//     console.error("Error creating comment:", error);
//     next(error); // Pass error to the next middleware
//   }
// };


// exports.getComments = async (req, res) => {
//   try {
//     const GlobalBlogresponse = await GlobalBlogModel.findOne({ blogCmnt: 1 });
//     if (GlobalBlogresponse) {
//       const comments = await CommentModel.find()
//         .sort({ createdAt: -1 })

//       res.status(200).json({ comments, GlobalBlogresponse });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch comments" });
//   }
// };





//theme
// const { data } = require("jquery");
// const CustomThemeModel = require("../Model/CustomThemeModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {

//   const uniqueFields = {  };

//   // Call the common function, passing in the specific model and unique fields
//   await handlePostCommon(req, res, CustomThemeModel, uniqueFields, next);
//   // try {
//   //   const {
//   //     title,
//   //     taglines,
//   //     colNum,
//   //     colhead1,
//   //     colData1,
//   //     colhead2,
//   //     colData2,
//   //     colData3,
//   //     colhead4,colhead3,
//   //     colData4,
//   //     copyRight,
//   //   } = req.body;
//   //   const filename = req.file ? req.file.filename : "";
//   //   const formData = new CustomThemeModel({
//   //     title,
//   //     taglines,
//   //     filename,
//   //     colNum,
//   //     colhead1,
//   //     colData1,
//   //     colhead2,
//   //     colData2,
//   //     colData3,
//   //     colhead4,
//   //     colhead3,
//   //     colData4,
//   //     copyRight,
//   //   });
//   //   await formData.save();
//   //   console.log(formData);
//   //   res.status(200).json(formData).send("Form data saved successfully!");
//   // } catch (error) {
//   //   console.error(error);
//   //   next(error);
//   // }
// };

// const handleGet = async (req, res, next) => {
//   try {
//     const formData = await CustomThemeModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };
// // Backend: CustomThemeController.js

// const handleUpdate = async (req, res, next) => {
//   try {
//     const {
//       id,
//       title,
//       taglines,
//       colNum,
//       colhead1,
//       colData1,
//       colhead2,
//       colData2,
//       colData3,
//       colhead4,
//       colData4,colhead3,
//       copyRight,
//     } = req.body;

//     const formData = await CustomThemeModel.findById(id);

//     if (!formData) {
//       return res.status(404).json({ message: 'Record not found' });
//     }
//     const filename = req.file ? req.file.filename : "";

//     // Update fields
//     formData.title = title;
//     formData.taglines = taglines;
//     formData.colNum = colNum;
//     formData.colhead1 = colhead1;
//     formData.colData1 = colData1;
//     formData.colhead2 = colhead2;
//     formData.colData2 = colData2;
//     formData.colData3 = colData3;
//     formData.colData3 = colData3;
//     formData.colhead4 = colhead4;
//     formData.colhead3 = colhead3;
//     formData.copyRight = copyRight;
//     formData.colData4=colData4
//     formData.filename=filename

//     // if (req.file) {
//     //   formData.filename = req.file.filename; // Update the file if a new one is uploaded
//     // }

//     await formData.save();
//     res.status(200).json({ message: 'Form data updated successfully!', formData });  } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };



// module.exports = { handlePost, handleGet,handleUpdate };



//dashbord
// const pageModel = require("../Model/Pagemodel");
// const menuModel = require("../Model/MenuModel");
// const blogMOdel = require("../Model/BlogModel");
// const mediaModel = require("../Model/MediamainPageModel");
// const CommentModel = require("../Model/CommentModel");

// const handlepageCount = async (req, res, next) => {
//   try {
//     const pageCount = await pageModel.countDocuments();
//     const dashboardCount = {
//       pageCount,
//     };
//     // console.log("PAGECOUNT"+pageCount);

//     res.status(200).json(dashboardCount);
//   } catch (error) {
//     console.error("Error fetching dashboard :", error);
//     next(error);
//   }
// };
// const handleMenuCount = async (req, res, next) => {
//   try {
//     const menucount = await menuModel.countDocuments();
//     console.log("menucount"+menucount);
//     const dashboardCount2 = {
//       menucount,
//     };

//     res.status(200).json(dashboardCount2);
//   } catch (error) {
//     console.error("Error fetching dashboard :", error);
//     next(error);
//   }
// };
// const handleCmntCount = async (req, res, next) => {
//   try {
//     const blogCount = await CommentModel.countDocuments();
//     console.log("blogCount"+blogCount);
//     const dashboardCount2 = {
//       blogCount,
//     };

//     res.status(200).json(dashboardCount2);
//   } catch (error) {
//     console.error("Error fetching dashboard :", error);
//     next(error);
//   }
// };


// const handleMediaCount = async (req, res, next) => {
//   try {
//     const MediaCount = await mediaModel.countDocuments();
//     console.log("MediaCount"+MediaCount);
//     const dashboardCount2 = {
//       MediaCount,
//     };

//     res.status(200).json(dashboardCount2);
//   } catch (error) {
//     console.error("Error fetching dashboard :", error);
//     next(error);
//   }
// }


// module.exports = { handlepageCount,handleMenuCount,handleCmntCount, handleMediaCount};







//form builder
// const { FormioData, FormDefinition } = require("../Model/FormBuilderModel");
// const nodemailer = require("nodemailer");
// const GlobalSmtpModel = require("../Model/GlobalSmtpModel");

// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const Contact = require("../Model/ContactFormModel"); 

// // Function to create the transporter with SMTP settings
// async function createTransporter() {
//   try {
//     // Fetch SMTP settings from the database
//     const smtpSettings = await GlobalSmtpModel.findOne({
//       settingSlug: "smtp_settings",
//     });

//     if (!smtpSettings) {
//       throw new Error("SMTP settings not found.");
//     }

//     // Create the transporter with fetched settings
//     return nodemailer.createTransport({
//       service: smtpSettings.host,
//       port: smtpSettings.port,
//       secure: smtpSettings.port === 465, // true for 465, false for other ports
//       auth: {
//         user: smtpSettings.username,
//         pass: smtpSettings.password,
//       },
//     });
//   } catch (error) {
//     console.error("Error creating transporter:", error);
//     throw error;
//   }
// }
// const handlePostFormDefinition = async (req, res) => {

//   const uniqueFields = { };
//   handlePostCommon(req, res, FormDefinition, uniqueFields, next);
//   // try {
//   //   const formDefinition = req.body;
//   //   console.log(req.body);
//   //   const savedFormDefinition = new FormDefinition(formDefinition);
//   //   await savedFormDefinition.save();
//   //   res.status(201).json(savedFormDefinition);
//   // } catch (error) {
//   //   console.error("Error saving form definition:", error);
//   //   res.status(500).json({ error: "Failed to save form definition" });
//   // }
// };

// const handleGetFormDefinition = async (req, res) => {
//   try {
//     const formDefinition = await FormDefinition.find();
//     res.status(200).json(formDefinition);
//   } catch (error) {
//     console.error("Error retrieving form definition:", error);
//     res.status(500).json({ error: "Failed to retrieve form definition" });
//   }
// };
// const handleFrontendDataShow = async (req, res, next) => {
//   try {
//     const formData = await FormDefinition.find({ publish: 1 });
//     res.status(200).json(formData);
//     // console.log(formData);
//   } catch (error) {
//     next(error);
//   }
// };
// const handlePublishCheckboxUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await FormDefinition.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.params.publish,
//           // Update other fields as needed
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const handleDelete = async (req, res) => {
//   try {
//     const deletedFormData = await FormDefinition.findByIdAndDelete(
//       req.params.id
//     );
//     if (!deletedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res.status(200).json({ message: "Form data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const handleEdit = async (req, res) => {
//   try {
//     const formData = await FormDefinition.findOne({ _id: req.params.id });
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const handleUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await FormDefinition.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           formName: req.body.formName,
//           publish: req.body.publish,
//           components: req.body.components,
//           display: req.body.display,
//           sendMail: req.body.sendMail,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
// const handlePostFormioData = async (req, res) => {
//   const formId = req.params._id; // Assuming form ID is passed as a URL parameter
//   const { formData, formName, components } = req.body; // Extract form data from request body

//   try {
//     // Fetch form definition by ID
//     const formDefinition = await FormDefinition.findOne(formId);

//     if (!formDefinition) {
//       return res.status(404).json({ error: "Form definition not found" });
//     }

//     console.log("Form Definition:", formDefinition);

//     // Save form data
//     const savedFormData = await FormioData.create({
//       formData,
//       formName,
//       components,
//       sendMail: formDefinition.sendMail, // Use sendMail value from the form definition
//     });

//     // Send email if sendMail is true
//     if (formDefinition.sendMail) {
//       console.log("sendMail is true, sending email...");

//       const transporter = await createTransporter();
//       const recipientEmail =
//         formData.email ||
//         formData.email1 || // First priority
//         formData.email2 || // Fallback if primaryEmail is missing
//         "default@example.com";
//       // const recipientEmail = formData.email || "default@example.com"; // Fallback email
//       const senderName =
//         formData.textField ||
//         formData.textField1 ||
//         formData.textField2 ||
//         formData.name ||
//         "No Name Provided"; // Fallback name
//       const messageContent =
//         formData.message ||
//         formData.textArea ||
//         formData.textArea1 ||
//         formData.textArea2 ||
//         "No Message Provided"; // Fallback message

//       const mailOptions = {
//         from: transporter.options.auth.user,
//         to: recipientEmail,
//         subject: "New Form Submission",
//         text: `Name: ${senderName}\n\nMessage: ${messageContent}`,
//       };

//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully");
//     }

//     res.status(201).json(savedFormData);
//   } catch (error) {
//     console.error("Error saving form data or sending email:", error);
//     res.status(500).json({ error: "Failed to save form data or send email" });
//   }
// };

// //formio data
// // const handlePostFormioData = async (req, res) => {
// //   try {
// //     const { formData, formName, components,sendMail } = req.body;
// //     const savedFormData = await FormioData.create({
// //       formData,
// //       formName,
// //       components,
// //     });
// //     res.status(201).json(savedFormData);
// //   } catch (error) {
// //     console.error("Error saving form data:", error);
// //     res.status(500).json({ error: "Failed to save form data" });
// //   }
// // };
// const handleGetFormioData = async (req, res) => {
//   try {
//     const data = await FormioData.find();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: "data not find" });

//     console.error(error, "datanot found");
//   }
// };
// const handleDeleteFormData = async (req, res) => {
//   try {
//     const deletedFormData = await FormioData.findByIdAndDelete(req.params.id);
//     if (!deletedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res.status(200).json({ message: "Form data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
// module.exports = {
//   handlePostFormDefinition,
//   handleGetFormDefinition,
//   handlePostFormioData,
//   handleGetFormioData,
//   handleFrontendDataShow,
//   handlePublishCheckboxUpdate,
//   handleEdit,
//   handleUpdate,
//   handleDelete,
//   handleDeleteFormData,
// };




//genral settingh

//const GeneralSettingModel = require("../Model/GeneralSettingModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {
//   try {
//     // Check if a record already exists
//     let existingSetting = await GeneralSettingModel.findOne();

//     if (existingSetting) {
//       // If the record exists, update it
//       existingSetting.disVideo = req.body.disVideo;
//       existingSetting.disContact = req.body.disContact;
//       existingSetting.videoRow = req.body.videoRow;
//       existingSetting.videoPage = req.body.videoPage;
//       existingSetting.mail = req.body.mail;
//       existingSetting.disVideoSlug = req.body.disVideoSlug;
//       existingSetting.videoRowSlug = req.body.videoRowSlug;
//       existingSetting.videoPageSlug = req.body.videoPageSlug;
//       existingSetting.disContactSlug = req.body.disContactSlug;
//       existingSetting.mailSlug = req.body.mailSlug;

//       await existingSetting.save();
//       res.status(200).json(existingSetting);
//     } else {
//       // If no record exists, create a new one
//       const newSetting = new GeneralSettingModel({
//         disVideo: req.body.disVideo,
//         disContact: req.body.disContact,
//         videoRow: req.body.videoRow,
//         videoPage: req.body.videoPage,
//         mail: req.body.mail,
//         disVideoSlug: req.body.disVideoSlug,
//         videoRowSlug: req.body.videoRowSlug,
//         videoPageSlug: req.body.videoPageSlug,
//         disContactSlug: req.body.disContactSlug,
//         mailSlug: req.body.mailSlug,
//       });

//       await newSetting.save();
//       res.status(201).json(newSetting);
//     }
//   } catch (error) {
//     console.error("Error handling GeneralSettings:", error);
//     next(error);
//   }
// };

// const handleUpdate = async (req, res, next) => {
//   try {
//     const updatedSetting = await GeneralSettingModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         disVideo: req.body.disVideo,
//         disContact: req.body.disContact,
//         videoRow: req.body.videoRow,
//         videoPage: req.body.videoPage,
//         mail: req.body.mail,
//         disVideoSlug: req.body.disVideoSlug,
//         videoRowSlug: req.body.videoRowSlug,
//         videoPageSlug: req.body.videoPageSlug,
//         disContactSlug: req.body.disContactSlug,
//         mailSlug: req.body.mailSlug,
//       },
//       { new: true }
//     );

//     res.status(200).json(updatedSetting);
//   } catch (error) {
//     console.error("Error updating GeneralSettings:", error);
//     next(error);
//   }
// };const handleGet = async (req, res, next) => {
//   try {
//     const updatedSetting = await GeneralSettingModel.find();

//     res.status(200).json(updatedSetting);
//   } catch (error) {
//     console.error("Error updating GeneralSettings:", error);
//     next(error);
//   }
// };

// module.exports = { handlePost, handleUpdate ,handleGet};



//globlablog

// const GlobalBlogModel = require("../Model/GlobalBlogModel");

// const handlePost = async (req, res, next) => {
//   try {
//     let existingSetting = await GlobalBlogModel.findOne();
//     if (existingSetting) {
//       // If the record exists, update it
//       existingSetting.disBlog = req.body.disBlog;
//       existingSetting.blogCmnt = req.body.blogCmnt;
//       existingSetting.disBlogSlug = req.body.disBlogSlug;
//       existingSetting.blogCmntSlug = req.body.blogCmntSlug;
//       existingSetting.cmntApprove = req.body.cmntApprove;
//       existingSetting.cmntApproveSlug = req.body.cmntApproveSlug;
//       existingSetting.blogGrid = req.body.blogGrid;
//       existingSetting.blogGridSlug = req.body.blogGridSlug;
//       existingSetting.blogLayout = req.body.blogLayout;
//       existingSetting.blogLayoutSlug = req.body.blogLayoutSlug;
//       existingSetting.sidebarContent = req.body.sidebarContent;
//       existingSetting.sidebarContentSlug = req.body.sidebarContentSlug;
//       existingSetting.postPerPage = req.body.postPerPage;
//       existingSetting.postPerPageSlug = req.body.postPerPageSlug;

//       await existingSetting.save();
//       res.status(200).json(existingSetting);
//     } else {
//       const data = new GlobalBlogModel({
//         disBlog: req.body.disBlog,
//         blogCmnt: req.body.blogCmnt,
//         disBlogSlug: req.body.disBlogSlug,
//         blogCmntSlug: req.body.blogCmntSlug,
//         cmntApprove: req.body.cmntApprove,
//         cmntApproveSlug: req.body.cmntApproveSlug,
//         blogGrid: req.body.blogGrid,
//         blogGridSlug: req.body.blogGridSlug,
//         blogLayout: req.body.blogLayout,
//         blogLayoutSlug: req.body.blogLayoutSlug,
//         sidebarContent: req.body.sidebarContent,
//         sidebarContentSlug: req.body.sidebarContentSlug,
//         postPerPage: req.body.postPerPage,
//         postPerPageSlug: req.body.postPerPageSlug,
//       });

//       await data.save();
//       res.status(200).json(data);
//     }
//   } catch (error) {
//     console.error("error in posting the data", error);

//     next(error);
//   }
// };

// const handleGet = async (req, res, next) => {
//   try {
//     const response = await GlobalBlogModel.find();
//     //  [ {'dats':response,"v":gresponse}]
//     res.status(201).json(response);
//   } catch (error) {
//     console.log("error", error);
//     next(error);
//   }
// };
// module.exports = { handlePost, handleGet };


//gallery model 
// const HomesliderModel = require("../Model/HomeSliderModel");
// const MediaModel = require("../Model/SliderFileupload");
// const mongoose = require('mongoose')
// //to get uploaded data to send to another page on clicking the add button
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handleGet = async (req, res ,next) => {

//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid ObjectId" });
//     }

//     const image = await MediaModel.findById(id);
//     if (!image) {
//       return res.status(404).json({ error: "Image not found" });
//     }

//     res.json(image);
//   } catch (error) {
//     console.error(error);
//    next(error)
//   }
// }


// //to get into add slide page  page

// const handleGetHomesliderdata = async (req, res ,next) => {

//   const queryOptions = {};
//   handleGetCommon(req, res, HomesliderModel, queryOptions, next);
//   try {
//     const imgData = await HomesliderModel.find();
//     res.status(200).json(imgData);
//   } catch (error) {
//     console.error(error);

//     next(error);
//   }
// }
// const handleDelete = async (req, res ,next) => {
//   try {
//     const groupData = await HomesliderModel.findByIdAndDelete(req.params.id);

//     if (!groupData) {
//       return res.status(404).json({ error: " data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleting the data", error);

//     next(error)
//   }
// }


// const handleSubmitCheckBox = async (req, res ,next) => {
//   try {
//     // Create a new checkbox document and save it to the database
//     const checkbox = new HomesliderModel({ value: req.body.value });

//     // console.log(checkbox.value);
//     res.json({ checkbox: checkbox.value });
//   } catch (error) {
//     console.error("Error storing value:", error);

//     next(error);
//   }
// };



// module.exports = {
//   handleGet,
//   handleGetHomesliderdata,
//   handleDelete,
//   handleSubmitCheckBox,
// };


// homeslider2 controller 2
// const HomesliderModel = require("../Model/HomeSliderModel2");
// const MediaModel = require("../Model/BlogFileuploadModel");
// const { sendResponse, handleError } = require("../utils/responseHandler");
// const NodeError = require("../Errors/NodeErr");
// const mongoose = require('mongoose')

// //to get uploaded data to send to another page on clicking the add button

// const handleGet = async (req, res ,next) => {
//   const id = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     throw new NodeError(404, "Invalid ObjectId");

//   }
//   try {
//     const formData = await MediaModel.findById(id);
//     if (!formData) {
//       // console.log(`No data found for ID: ${id}`);
//       throw new NodeError(404, "Image not found ");
//     }

//     sendResponse(res, 200, formData);

//     // res.status(200).json(formData);
//   } catch (error) {
//     handleError(error, res);
//     next(error);
//   }
// };

// //to get into add slide page  page

// const handleGetHomesliderdata = async (req, res ,next) => {

//   const queryOptions = {};
//   handleGetCommon(req, res, HomesliderModel, queryOptions, next);
//   try {
//     const imgData = await HomesliderModel.find();
//     res.status(200).json(imgData);
//   } catch (error) {
//     console.error(error);

//     next(error);
//   }
// }
// const handleDelete = async (req, res ,next) => {
//   try {
//     const groupData = await HomesliderModel.findByIdAndDelete(req.params.id);

//     if (!groupData) {
//       return res.status(404).json({ error: " data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleting the data", error);

//     next(error)
//   }
// }


// const handleSubmitCheckBox = async (req, res ,next) => {
//   try {
//     // Create a new checkbox document and save it to the database
//     const checkbox = new HomesliderModel({ value: req.body.value });

//     // console.log(checkbox.value);
//     res.json({ checkbox: checkbox.value });
//   } catch (error) {
//     console.error("Error storing value:", error);

//     next(error);
//   }
// };

// module.exports = {
//   handleGet,
//   handleGetHomesliderdata,
//   handleDelete,
//   handleSubmitCheckBox,
// };


//slidercont
// const sliderModel = require("../Model/SliderModel");
// const mongoose = require("mongoose");
// const MediaModel = require("../Model/SliderFileupload");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");

// const handlePost = async (req, res, next) => {

//   try {
    
//     const newSlide = new sliderModel({
//       title: req.body.title,
//       publish: req.body.publish,
//       editorContent: req.body.editorContent,
//       file: req.body.file,
//     });
//     await newSlide.save();
   
//     res.status(201).json(newSlide);
//   } catch (error) {
//     console.error("Error adding slide:", error);
//     next(error);
//   }
// };



// const handleGetwithoutImage= async (req, res,next) => {
//   try {
//     const formData = await sliderModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//    next(error)
//   }
// }


// // Fetch all slides
// const handleGet = async (req, res, next) => {
//   try {
//     const imageData = await sliderModel.find();
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const sliderModelData = imageData[index];

//       let element = {};
//       element.autoID = sliderModelData._id;
//       element.title = sliderModelData.title;
//       element.publish = sliderModelData.publish;
//       element.editorContent = sliderModelData.editorContent;
//       element.file = sliderModelData.file;

//       if (sliderModelData.file && sliderModelData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(sliderModelData.file[0]);
//         const img = await MediaModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = ""; 
//         }
//       } else {
//         element.filename = ""; 
//       }
//       arr.push(element);
//     }

//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };


// const handleUpdateCheckbox = async (req, res, next) => {
//   // console.log(req.params)
//   try {
//     const updatedFormData = await sliderModel.findByIdAndUpdate(
//       req.params.id,
//       { $set: { publish: req.params.publish } },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating data:", error);
//     next(error);
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const groupData = await sliderModel.findByIdAndDelete(req.params.id);
//     if (!groupData) {
//       return res.status(404).json({ error: "Data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     next(error);
//   }
// };

// const handleEdit = async (req, res, next) => {
//   try {
//     const formData = await sliderModel.findById(req.params.id);
//     if (!formData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Fetch the image data associated with the slide
//     const imageId =
//       formData.file && formData.file.length > 0 ? formData.file[0] : null;
//     const imageData = imageId ? await MediaModel.findById(imageId) : null;

//     // Construct the response object with form data and image details
//     const responseData = {
//       formData: {
//         _id: formData._id,
//         title: formData.title,
//         publish: formData.publish,
//         editorContent: formData.editorContent,
//         file: formData.file,
//       },
//       imageData: imageData
//         ? {
//             _id: imageData._id,
//             filename: imageData.filename,
//             // Add other image properties you may need
//           }
//         : null,
//     };

//     res.status(200).json(responseData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     next(error);
//   }
// };

// const handleUpdate = async (req, res, next) => {
//   try {
//     // Check if a new file is being uploaded
//     let file;
//     if (req.file) {
//       file = req.file.path; // Assuming multer is being used to handle file uploads
//     } else {
//       file = req.body.file; // If no new file is uploaded, retain the existing file path
//     }

//     const updatedFormData = await sliderModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.body.publish,
//           title: req.body.title,
//           editorContent: req.body.editorContent,
//           file: file, // Updated file path
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating data:", error);
//     next(error);
//   }
// };

// const handleFrontendDataShow = async (req, res, next) => {
//   try {
//     const imageData = await sliderModel.find({ publish: 1 });
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const sliderModelData = imageData[index];

//       let element = {};
//       element.autoID = sliderModelData._id;
//       element.title = sliderModelData.title;
//       element.publish = sliderModelData.publish;
//       element.editorContent = sliderModelData.editorContent;
//       element.file = sliderModelData.file;

//       if (sliderModelData.file && sliderModelData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(sliderModelData.file[0]);
//         const img = await MediaModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = ""; // or some default value
//         }
//       } else {
//         element.filename = ""; // or some default value
//       }
//       arr.push(element);
//     }
//     // console.log(arr);

//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };


// module.exports = {
//   handleGet,
//   handlePost,
//   handleUpdateCheckbox,
//   handleUpdate,
//   handleDelete,
//   handleEdit,
//   handleGetwithoutImage,
//   handleFrontendDataShow
// };

// const AlbumModel = require("../Model/ManageAlbumModel");
// const mongoose = require("mongoose");
// const AlbumUploadModel = require("../Model/AlbumUploadModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost = async (req, res, next) => {


//   const uniqueFields = { };
//   handlePostCommon(req, res, AlbumModel, uniqueFields, next);
//   try {

//     const NewAlbum = new AlbumModel({
//       title: req.body.title,
//       publish: req.body.publish,
//       editorContent: req.body.editorContent,
//       file: req.body.file,
//     });
//     await NewAlbum.save();
//     // console.log("Album added successfully:", NewAlbum);
//     res.status(201).json(NewAlbum);
//   } catch (error) {
//     console.error("Error adding Album:", error);
//     next(error);
//   }
// };



// const handleGetwithoutImage= async (req, res,next) => {
//   try {
//     const Data = await AlbumModel.find();
//     res.status(200).json(Data);
//   } catch (error) {
//     console.error(error);
//    next(error)
//   }
// }


// // Fetch all slides
// const handleGet = async (req, res, next) => {
//   try {
//     const imageData = await AlbumModel.find();
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const AlbumModelData = imageData[index];

//       let element = {};
//       element.autoID = AlbumModelData._id;
//       element.title = AlbumModelData.title;
//       element.publish = AlbumModelData.publish;
//       element.editorContent = AlbumModelData.editorContent;
//       element.file = AlbumModelData.file;

      

//       let filenames = [];

//       if (AlbumModelData.file && AlbumModelData.file.length > 0) {
//         for (let fileId of AlbumModelData.file) {
//           const newID = new mongoose.Types.ObjectId(fileId);
//           const img = await AlbumUploadModel.findById(newID);
//           if (img) {
//             filenames.push(img.filename);
//           } else {
//             filenames.push(""); // or some default value
//           }
//         }
//       }

//       element.filenames = filenames;
//       arr.push(element);
    

//       // arr.push(element);
    
//     // console.log(arr);
//     }
//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching Album:", error);
//     next(error);
//   }
// };


// const handleUpdateCheckbox = async (req, res, next) => {
//   // console.log(req.params)
//   try {
//     const updatedFormData = await AlbumModel.findByIdAndUpdate(
//       req.params.id,
//       { $set: { publish: req.params.publish } },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating data:", error);
//     next(error);
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const Data = await AlbumModel.findByIdAndDelete(req.params.id);
//     if (!Data) {
//       return res.status(404).json({ error: "Data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     next(error);
//   }
// };


// const handleEdit = async (req, res, next) => {
//   try {
//     const albumData = await AlbumModel.findById(req.params.id);
//     if (!albumData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     // Fetch the image data associated with the slide
//     let imageDetails = [];
//     if (albumData.file && albumData.file.length > 0) {
//       for (let fileId of albumData.file) {
//         const img = await AlbumUploadModel.findById(fileId);
//         if (img) {
//           imageDetails.push({
//             _id: img._id,
//             filename: img.filename,
//           });
//         } else {
//           imageDetails.push({
//             _id: fileId, // include the file ID even if no image is found
//             filename: "", // or some default value
//           });
//         }
//       }
//     }

//     // Construct the response object with form data and image details
//     const responseData = {
//       albumData: {
//         _id: albumData._id,
//         title: albumData.title,
//         editorContent: albumData.editorContent,
//         publish: albumData.publish,
//         file: albumData.file,
//       },
//       imageData: imageDetails,
//     };

//     res.status(200).json(responseData);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     next(error);
//   }
// };


// const handleUpdate = async (req, res, next) => {
//   try {
//     // Check if a new file is being uploaded
//     let file;
//     if (req.file) {
//       file = req.file.path; // Assuming multer is being used to handle file uploads
//     } else {
//       file = req.body.file; // If no new file is uploaded, retain the existing file path
//     }

//     const updatedFormData = await AlbumModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.body.publish,
//           title: req.body.title,
//           editorContent: req.body.editorContent,
//           file: file, // Updated file path
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating data:", error);
//     next(error);
//   }
// };

// const handleFrontendDataShow = async (req, res, next) => {
//   try {
//     const imageData = await AlbumModel.find({ publish: 1 });
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const AlbumModelData = imageData[index];

//       let element = {};
//       element.autoID = AlbumModelData._id;
//       element.title = AlbumModelData.title;
//       element.publish = AlbumModelData.publish;
//       element.editorContent = AlbumModelData.editorContent;
//       element.file = AlbumModelData.file;



//       let filenames = [];

//       if (AlbumModelData.file && AlbumModelData.file.length > 0) {
//         for (let fileId of AlbumModelData.file) {
//           const newID = new mongoose.Types.ObjectId(fileId);
//           const img = await AlbumUploadModel.findById(newID);
//           if (img) {
//             filenames.push(img.filename);
//           } else {
//             filenames.push(""); // or some default value
//           }
//         }
//       }

//       element.filenames = filenames;
//       arr.push(element);
    
    
//     // console.log(arr);
//     }
//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// }


// module.exports = {
//   handleGet,
//   handlePost,
//   handleUpdate,
//   handleDelete,
//   handleUpdateCheckbox,
//   handleEdit,
//   handleGetwithoutImage,
//   handleFrontendDataShow
// };
// const MediaMainPagemodel = require("../Model/MediamainPageModel");
// const MediaUploadModel = require("../Model/Mediauploadmodel");
// const mongoose = require("mongoose");
// const GlobalGalleryModel = require('../Model/GlobalGalleryModel')
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handleAddImageToMedia = async (req, res, next) => {

//   const uniqueFields = { name: req.body.name };
//   handlePostCommon(req, res, MediaMainPagemodel, uniqueFields, next);
//   try {
//     const newdata = new MediaMainPagemodel({
//       file: req.body.file,
//       showInGallery:"", // Set default value to 2 for publish
//     });
//     await newdata.save();
//     // console.log("Data added successfully:", newdata);
//     res.status(201).json(newdata);
//   } catch (error) {
//     console.error("Error adding image:", error);
//     next(error);
//   }
// };

// const handleGetMediaImages = async (req, res, next) => {
//   try {
//     const imageData = await MediaMainPagemodel.find();
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const MediaMainPageData = imageData[index];
//       let element = {};
//       element.autoID = MediaMainPageData._id;
//       element.file = MediaMainPageData.file;
//       element.showInGallery = MediaMainPageData.showInGallery;

//       if (MediaMainPageData.file && MediaMainPageData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(MediaMainPageData.file[0]);
//         const img = await MediaUploadModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = "";
//         }
//       } else {
//         element.filename = "";
//       }
//       arr.push(element);
//     }
//     // console.log(arr);
//     res.status(200).json(arr);
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const id = req.params.id; // Ensure this captures the correct id
//         const groupData = await MediaMainPagemodel.findByIdAndDelete(id);
//     if (!groupData) {
//       return res.status(404).json({ error: "Data not found" });
//     }
//     return res.status(200).json({ message: "Data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     next(error);
//   }
// };


// const handleShowMediaDataFrontend = async (req, res, next) => {
//   try {

    
//     const    GlobalGallery= await GlobalGalleryModel.findOne({disGallery:1})
// if(GlobalGallery){


//     const imageData = await MediaMainPagemodel.find({
//       showInGallery: 1,
//     });
//     let arr = [];

//     for (let index = 0; index < imageData.length; index++) {
//       const MediaMainPageData = imageData[index];
//       let element = {};
//       element.autoID = MediaMainPageData._id;
//       element.file = MediaMainPageData.file;
//       element.showInGallery = MediaMainPageData.showInGallery;

//       if (MediaMainPageData.file && MediaMainPageData.file.length > 0) {
//         const newID = new mongoose.Types.ObjectId(MediaMainPageData.file[0]);
//         const img = await MediaUploadModel.findById(newID);
//         if (img) {
//           element.filename = img.filename;
//         } else {
//           element.filename = "";
//         }
//       } else {
//         element.filename = "";
//       }
//       arr.push(element);
//     }
//     // console.log(arr);
//     res.status(200).json({arr,GlobalGallery});
//   }
//   } catch (error) {
//     console.error("Error fetching slides:", error);
//     next(error);
//   }
// };

// const handlePublishpageCheckboxUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await MediaMainPagemodel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           showInGallery: req.params.showInGallery,
//           // Update other fields as needed
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = {
//   handleAddImageToMedia,
//   handleGetMediaImages,
//   handleDelete,
//   handlePublishpageCheckboxUpdate,
//   handleShowMediaDataFrontend,
// };




//groupmenu
// const MenuGroupModel = require("../Model/MenuGroupModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");

// const NodeError = require("../Errors/NodeErr");
// const { sendResponse, handleError } = require("../utils/responseHandler");
// const handlePost = async (req, res ,next) => {
//   try {
//     const groupData = new MenuGroupModel({
//       groupName: req.body.groupName,
//       publish: req.body.publish,
//       slug:"gd_"+req.body.slug
//     });
//     await groupData.save(); 
//        sendResponse(res, 200, groupData);

//     // console.log(groupData);
//   } catch (error) {
//     handleError(error, res);
//     console.error(error);
//     next(error)
//   }
// }

// const handleGet = async (req, res,next) => {

//   const queryOptions = {};
//   handleGetCommon(req, res, MenuGroupModel, queryOptions, next);

// };

// const handleDelete = async (req, res,next) => {

//   handleCommonDelete(MenuGroupModel, req.params.id, res, next);


// };

// const handleEdit = async (req, res,next) => {

//   handleEditCommon(req, res, MenuGroupModel, next);

//   try {
//     console.log(req.params);
//     const groupData = await MenuGroupModel.findOne({
//       _id: req.params.id,
//     });
//     res.status(200).json(groupData);
//   } catch (error) {
//     console.error(error);
//     next(error)  }
// };

// const handleUpdate = async (req, res,next) => {
//   try {
//     const updatedFormData = await MenuGroupModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           // p_id: req.body.p_id,
//           groupName: req.body.groupName,
//           publish: req.body.publish,
//           slug: "gd_"+req.body.slug,
//         },
//       },
//       { new: true }
//     );
//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next(error)  }
// };
// const handleUpdateCheckBox = async (req, res,next) => {
//   try {
//     const updatedFormData = await MenuGroupModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.params.publish,
//           // Update other fields as needed
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next(error)  }
// };

// module.exports = {
//   handlePost,
//   handleGet,
//   handleDelete,
//   handleEdit,
//   handleUpdate,
//   handleUpdateCheckBox,
// };



//newsletter
// const { title } = require("process");
// const newsletterModel = require("../Model/NewsletterModel");
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");
// const handlePost =
//   // Create a new form
//   async (req, res) => {

//     const uniqueFields = { };
//     handlePostCommon(req, res, PageModel, newsletterModel, next)
//     // const {
//     //   publish,
//     //   title,
//     //   description,
//     //   nameActive,
//     //   nameRequired,
//     //   emailActive,
//     //   emailRequired,
//     // } = req.body;

//     // try {
//     //   const newForm = new newsletterModel({
//     //     publish,
//     //     title,
//     //     description,
//     //     nameActive,
//     //     nameRequired,
//     //     emailActive,
//     //     emailRequired,
//     //   });
//     //   await newForm.save();
//     //   res.status(201).json(newForm);
//     // } catch (error) {
//     //   res.status(500).json({ error: "Failed to create form" });
//     // }
//   };

// const handleGet = async (req, res) => {
//   try {
//     const form = await newsletterModel.find();

//     res.status(200).json(form);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch form data" });
//   }
// };

// const handleEdit = async (req, res) => {
//   try {
//     const form = await newsletterModel.findOne({ _id: req.params.id });

//     res.status(200).json(form);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch form data" });
//   }
// };

// const handleUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await newsletterModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//           nameActive: req.body.nameActive,
//           nameRequired: req.body.nameRequired,
//           emailActive: req.body.emailActive,
//           emailRequired: req.body.emailRequired,
//           publish: req.body.publish,
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const handleDelete =
//   // Delete form data by ID
//   async (req, res) => {
//     const { id } = req.params;

//     try {
//       const deletedForm = await newsletterModel.findByIdAndDelete(id);
//       if (!deletedForm) {
//         return res.status(404).json({ error: "Form not found" });
//       }
//       res.json({ message: "Form deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to delete form data" });
//     }
//   };

//   const handlePublishpageCheckboxUpdate = async (req, res) => {
//     try {
//       const updatedFormData = await newsletterModel.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             publish: req.params.publish,
//             // Update other fields as needed
//           },
//         },
//         { new: true }
//       );
  
//       if (!updatedFormData) {
//         return res.status(404).json({ error: "Form data not found" });
//       }
  
//       res
//         .status(200)
//         .json({ message: "Form data updated successfully", updatedFormData });
//     } catch (error) {
//       console.error("Error updating form data:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
  
//   const handleFrontendDataShow = async (req, res, next) => {
//     try {
//       const formData = await newsletterModel.find({
   
//         publish: 1,
//       });
//       res.status(200).json(formData);
//       // console.log(formData);
//     } catch (error) {
//       next(error);
//     }
//   }

// module.exports = {
//   handlePost,
//   handleGet,
//   handleUpdate,
//   handleDelete,
//   handleEdit,
//   handlePublishpageCheckboxUpdate,handleFrontendDataShow
// };



//submenu model
// const SubMenuModel = require('../Model/SubmenuModel')
// const MenuModel= require('../Model/MenuModel')
// const PageModel = require('../Model/Pagemodel')

// const mongoose = require('mongoose')
// const SubmenuModel = require('../Model/SubmenuModel')
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");


// const handlePost = async (req, res, next) => {

//   const uniqueFields = { name: req.body.name };
//   handlePostCommon(req, res, SubMenuModel, uniqueFields, next);
//   try {

//     const submenuData = new SubMenuModel({
//       p_id: req.body.p_id,
//       submenuname: req.body.submenuname,
//       parentMenuName: req.body.parentMenuName,
//       menulink:req.body.menulink,
//       publish: req.body.publish,
//       subUrlLink: req.body.subUrlLink
//     });
//     await submenuData.save();
//     // console.log(submenuData);
//     res.status(201).json(submenuData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// }
// const handleGetData = async (req, res) => {
//     try {
//       const formData = await SubMenuModel.find({ p_id: req.params.id });
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//       next(error)    }
//   }
// const handleGetParentSubmenu = async (req, res,next) => {
//     try {
//       const menuData = await MenuModel.findOne({ _id: req.params.id });
//       res.status(200).json(menuData);
//     } catch (error) {
//       console.error(error);
//       next(error)    }
//   }
// //for menu link-getting  page  data in  the menu  page
// const handleGetPageData=  async (req, res,next) => {
//     try {
//       const formData = await PageModel.find();
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//       next(error)    }
//   }

//   const handleUpdateCheckbox = async (req, res,next) => {
    
    
//     // console.log(req.params)
//     try {
//       const updatedFormData = await SubmenuModel.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             publish: req.params.publish,
//           },
//         },
//         { new: true }
//       );
  
//       if (!updatedFormData) {
//         return res.status(404).json({ error: "Form data not found" });
//       }
  
//       res
//         .status(200)
//         .json({ message: "Form data updated successfully", updatedFormData });
//     } catch (error) {
//       console.error("Error updating form data:", error);
//       next(error)
//     }
//   }


//   const handleDelete= async (req, res,next) => {
//     try {
//       const submenuData = await SubMenuModel.findByIdAndDelete(req.params.id);
//       if (!submenuData) {
//         return res.status(404).json({ error: "submenu data is not find " });
//       }
//       res.status(200).json({ message: "Submenu data delleted successfully" });
//     } catch (error) {
//       console.error("error in deleting the submenu data ", error);
//       next(error)    }
//   }

//   const handleEdit= async (req, res,next) => {
//     try {
//       // console.log(req.params);
//       const submenuData = await SubMenuModel.findOne({
//         _id: req.params.id,
//       });
//       // console.log("Submenu Data:", submenuData); // Add this line
//       res.status(200).json(submenuData);
//     } catch (error) {
//       console.error(error);
//       next(error)    }
//   }

//   const handleUpdate = async (req, res,next) => {
//     try {
//       const updatedFormData = await SubMenuModel.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             p_id: req.body.p_id,
//             submenuname: req.body.submenuname,
//             menulink: req.body.menulink,
//             parentMenuName: req.body.parentMenuName,
//             publish: req.body.publish,
//             subUrlLink:req.body.subUrlLink
//           },
//         },
//         { new: true }
//       );
//       res
//         .status(200)
//         .json({ message: "Form data updated successfully", updatedFormData });
//     } catch (error) {
//       console.error("Error updating form data:", error);
//       next(error)    }
//   }
// module.exports = {handlePost,handleGetData,handleGetParentSubmenu,handleGetPageData,handleUpdateCheckbox,handleDelete,handleEdit,handleUpdate}



//subscirber controller
// const subscribersModel = require('../Model/SubscribersModel')
// const {
//   handlePostCommon,
//   handleGetCommon,
//   handleEditCommon,
//   handleCommonDelete,
//   handleUpdateCommon,
// } = require("../utils/CommonHandler");

// const handlePost = ( async (req, res,next) => {

//   const uniqueFields = {};
//   handlePostCommon(req, res, subscribersModel, uniqueFields, next);
//     try {
//       const formData = new subscribersModel({
//         name: req.body.name,
//         email: req.body.email,
//       });
//       await formData.save();
//       // console.log(formData)
//       res.status(200).send("Form data saved successfully!");
//     } catch (error) {
//       console.error(error);
//      next(error)
//     }
//   })


//   const handleGet = async (req, res,next) => {
//     try {
//       const formData = await subscribersModel.find();
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//      next(error)
//     }
//   }  
//   const handleDelete = async (req, res,next) => {
//     try {
//       const formData = await subscribersModel.findByIdAndDelete(req.params.id);
//       res.status(200).json(formData);
//     } catch (error) {
//       console.error(error);
//      next(error)
//     }
//   }
//   const handlePublishCheckboxUpdate = async (req, res) => {
//     try {
//       const updatedFormData = await subscribersModel.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: {
//             publish: req.params.publish,
//             // Update other fields as needed
//           },
//         },
//         { new: true }
//       );
  
//       if (!updatedFormData) {
//         return res.status(404).json({ error: "Form data not found" });
//       }
  
//       res
//         .status(200)
//         .json({ message: "Form data updated successfully", updatedFormData });
//     } catch (error) {
//       console.error("Error updating form data:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
//   module.exports={handlePost,handleGet,handlePublishCheckboxUpdate,handleDelete}



//template cont
// const TemplateModel = require("../Model/TemplateModel");

// const handlePost = async (req, res, next) => {
//   try {
//     const TemplateData = new TemplateModel({
//         templateSlug: req.body.templateSlug,
   
//         editorContent:req.body.editorContent
     
//     });
//     await TemplateData.save();
//     res.status(200).json(TemplateData);
//     // console.log(TemplateData);
//   } catch (error) {
//     console.error("error in storing value  ", error);
//     next(error);
//   }
// };
// const handleGet = async (req, res, next) => {
//     try {
//       const TemplateData = await TemplateModel.find();
//       res.status(200).json(TemplateData);
//     } catch (error) {
//       console.error(error, "error in getting the image");
//       next(error);
//     }
//   };

// module.exports = {
//     handlePost,handleGet}

//video controller
// const videoModel = require("../Model/VideoModel");
// const GeneralSetting = require('../Model/GeneralSettingModel')
// const handlePost = async (req, res, next) => {
//   try {
//     const videoData = new videoModel({
//       title: req.body.title,
//       description: req.body.description,
//       url: req.body.url,
//       publish: req.body.publish,
//       frontpage: req.body.frontpage,
//     });
//     await videoData.save();
//     res.status(200).json(videoData);
//     // console.log(videoData);
//   } catch (error) {
//     console.error("error in storing value  ", error);
//     next(error);
//   }
// };

// const handleGetVideo = async (req, res, next) => {
//   try {

      
      
//       const videoData = await videoModel.find();
//       console.log("gee",videoData.data)
//     res.status(200).json(videoData);

//   } catch (error) {
//     console.error(error, "error in getting the image");
//     next(error);
//   }
// };

// const handleDelete = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const videoData = await videoModel.findByIdAndDelete(id);
//     if (!videoData) {
//       res.status(404).json({ error: "Video not founded" });
//     } else {
//       res.status(200).json({ message: " Video deleted successfully  " });
//     }
//   } catch (error) {
//     console.error("Error in deleting the video", error);
//     next(error);
//   }
// };

// const handleUpdateCheckbox = async (req, res, next) => {
//   try {
//     const updatedFormData = await videoModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           publish: req.params.publish,
//           // Update other fields as needed
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next(error);
//   }
// };

// const handleEdit = async (req, res, next) => {
//   try {
//     const videoData = await videoModel.findOne({
//       _id: req.params.id,
//     });
//     res.status(200).json(videoData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleUpdate = async (req, res, next) => {
//   try {
//     const videoData = await videoModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           // p_id: req.body.p_id,
//           title: req.body.title,
//           description: req.body.description,
//           url: req.body.url,
//           publish: req.body.publish,
//         },
//       },
//       { new: true }
//     );
//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", videoData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     next(error);
//   }
// };

// const handleVideoShowfrontend = async (req, res, next) => {
//   try {

//     const generalSetting = await GeneralSetting.findOne({ disVideo:1 });
//     // Check if the setting exists and disVideo is set to 1
//     if (generalSetting ) {
//     const videoData = await videoModel.find({
//       publish: 1,
//     });
//   //  [ {'dats':response,"v":gresponse}]

//     res.status(200).json({
//       generalSetting,
//       videoData,
//     });
//   } }catch (error) {
//     console.error("error in show data ");
//     next(error);
//   }
// };

// //for general setting
// const handleFrontpageRadioUpdate = async (req, res, next) => {
//   try {
//     const updateFrontpageCheckBox = await videoModel.findByIdAndUpdate(
//       req.params.id,

//       {
//         $set: {
//           frontpage: req.params.frontpage,
//         },
//       },
//       { new: true }
//     );
//     res
//       .status(400)
//       .json({
//         message: "FRontapge value  updated successfully",
//         updateFrontpageCheckBox,
//       });
//   } catch (error) {
//     console.error("error in updating the checkbox update ", error);
//     next(error);
//   }
// };
// module.exports = {
//   handlePost,
//   handleGetVideo,
//   handleDelete,
//   handleUpdateCheckbox,
//   handleEdit,
//   handleUpdate,
//   handleVideoShowfrontend,
//   handleFrontpageRadioUpdate,
// };


//widegt
// const WidgetThemeModel = require("../Model/WidgetThemeModel");

// const handlePost = async (req, res, next) => {
//   try {
//     const formData = new WidgetThemeModel({
//       title: req.body.title,

//       editorContent: req.body.editorContent,
//     });
//     console.log(formData);
//     await formData.save();
//     res.status(201).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleGet = async (req, res, next) => {
//   try {
//     const formData = await WidgetThemeModel.find();
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// const handleEdit = async (req, res) => {
//   try {
//     const formData = await WidgetThemeModel.findOne({ _id: req.params.id });
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const handleDelete = async (req, res) => {
//   try {
//     const deletedFormData = await WidgetThemeModel.findByIdAndDelete(
//       req.params.id
//     );
//     if (!deletedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res.status(200).json({ message: "Form data deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const handleUpdate = async (req, res) => {
//   try {
//     const updatedFormData = await WidgetThemeModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           title: req.body.title,

//           editorContent: req.body.editorContent,
        
//         },
//       },
//       { new: true }
//     );

//     if (!updatedFormData) {
//       return res.status(404).json({ error: "Form data not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Form data updated successfully", updatedFormData });
//   } catch (error) {
//     console.error("Error updating form data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = {
//   handlePost,
//   handleGet,
//   handleEdit,
//   handleDelete,
//   handleUpdate,
// };
