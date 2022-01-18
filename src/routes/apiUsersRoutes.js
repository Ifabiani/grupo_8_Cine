const express = require('express');
const router = express.Router();
const controller = require('../apiControllers/apiUsersController');

router.get('/', controller.users)
router.get('/:id', controller.detail)

module.exports = router