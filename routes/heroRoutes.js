const express = require('express');
const { createUser } = require('../controller/index');

const router = express.Router();

router.post('/user/register', createUser);

module.exports = router;