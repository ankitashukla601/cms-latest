const express = require('express')

const router = express.Router()
const {handlePost,handleFrontapgeLeftMenuData,handleFrontapgeRightMenuData,handleFrontapgeHeaderData,handleGetMenuLinkData,handleGetAllData,handleUpdateCheckbox,handleDelete,handleEdit,handleUpdate,handleFrontapgeFooterData,handleFrontapgeLeftSideData}= require('../Controller/MenuController')


router.route('/submit-menu').post(handlePost)
router.route('/get/menu/front-page/header/data').get(handleFrontapgeHeaderData)
router.route('/get-menulink-data').get(handleGetMenuLinkData)
router.route('/get-menuForm-data').get(handleGetAllData)
router.route('/update-menu-checkbox/:id/:publish').get(handleUpdateCheckbox)
router.route('/delete-menu/:id').delete(handleDelete)
router.route('/get-menu-data/:id').get(handleEdit)
router.route('/edit-menu/:id').put(handleUpdate)
router.route('/get/menu/front-page/left-menu/data').get(handleFrontapgeLeftMenuData)
// router.route('/get/menu/front-page/footer/data').get(handleFrontapgeFooterData)
router.route('/get/menu/front-page/right-menu/data').get(handleFrontapgeRightMenuData)



module.exports = router;