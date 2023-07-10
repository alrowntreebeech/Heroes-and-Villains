const express = require('express');
const { createUser } = require('../db/queries');

const router = express.Router();

router.post('/user/register', createUser);

module.exports = router;