// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();

const { handlepageCount,handleMenuCount,handleMediaCount,handleCmntCount } = require('../Controller/DashboardController');

router.route("/dashboard/pagecount").get(handlepageCount);
router.route("/dashboard/menucount").get(handleMenuCount);
router.route("/dashboard/mediacount").get(handleMediaCount);
router.route("/dashboard/cmntcount").get(handleCmntCount);

module.exports = router;
