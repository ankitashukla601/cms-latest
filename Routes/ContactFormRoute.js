// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const {createContact} = require('../Controller/ContactFormCont');

// POST /api/contact
router.post('/contact/form', createContact);

module.exports = router;
