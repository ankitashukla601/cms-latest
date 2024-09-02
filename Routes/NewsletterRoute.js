const express = require('express')

const router = express.Router()
const { handlePost,handleGet,handleUpdate,handleFrontendDataShow,handleDelete,handleEdit,handlePublishpageCheckboxUpdate} = require('../Controller/NewsletterCont') 

router.route('/submit/newsletter').post(handlePost)
router.route('/get/newsletter').get(handleGet)
router.route('/delete/newsletter/:id').delete(handleDelete)
router.route('/update/newsletter/:id').put(handleUpdate)
router.route('/edit/newsletter/:id').get(handleEdit)
router.route('/newsletter/publish/:id/:publish').get( handlePublishpageCheckboxUpdate);
router.route('/show/newsletter/forntend/data').get(handleFrontendDataShow)



module.exports = router;