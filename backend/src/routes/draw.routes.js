const express = require('express')
const router = express.Router();

const DrawController = require('../controllers/draw.controller');

const BASE_URL = '/api/drawn';

router.put(BASE_URL, DrawController.draw);

module.exports = router;