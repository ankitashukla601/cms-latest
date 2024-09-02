const { data } = require("jquery");
const CustomThemeModel = require("../Model/CustomThemeModel");
const {
  handlePostCommon,
  handleGetCommon,
  handleEditCommon,
  handleCommonDelete,
  handleUpdateCommon,
} = require("../utils/CommonHandler");


const handlePost = async (req, res, next) => {
  const uniqueFields = {  };
  await handlePostCommon(req, res, CustomThemeModel, uniqueFields, next);
 
};

const handleGet = async (req, res, next) => {
  const queryOptions = {};
  handleGetCommon(req, res, CustomThemeModel, queryOptions, next);
};


const handleUpdate = async (req, res, next) => {
  try {
    const {
      id,
      title,
      taglines,
      colNum,
      colhead1,
      colData1,
      colhead2,
      colData2,
      colData3,
      colhead4,
      colData4,colhead3,
      copyRight,
    } = req.body;

    const formData = await CustomThemeModel.findById(id);

    if (!formData) {
      return res.status(404).json({ message: 'Record not found' });
    }
    const filename = req.file ? req.file.filename : "";

    // Update fields
    formData.title = title;
    formData.taglines = taglines;
    formData.colNum = colNum;
    formData.colhead1 = colhead1;
    formData.colData1 = colData1;
    formData.colhead2 = colhead2;
    formData.colData2 = colData2;
    formData.colData3 = colData3;
    formData.colData3 = colData3;
    formData.colhead4 = colhead4;
    formData.colhead3 = colhead3;
    formData.copyRight = copyRight;
    formData.colData4=colData4
    formData.filename=filename

    // if (req.file) {
    //   formData.filename = req.file.filename; // Update the file if a new one is uploaded
    // }

    await formData.save();
    res.status(200).json({ message: 'Form data updated successfully!', formData });  } catch (error) {
    console.error(error);
    next(error);
  }
};



module.exports = { handlePost, handleGet,handleUpdate };
