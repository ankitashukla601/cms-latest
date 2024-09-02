const handleLogin = require('../Controller/LoginController');
const express = require('express');
const router = express.Router()

router.post('/login',handleLogin)
module.exports=router
