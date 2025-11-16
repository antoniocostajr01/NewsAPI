const express = require('express');
const router = express.Router();

const editionController = require("../controller/editionController");

router.get('/latest', editionController.getLatestEdition);

module.exports = router;