const express = require('express');
const tecnicoController =  require('../controllers/tecnicoController')

const router = express.Router();

router.post('/', tecnicoController.criar);

module.exports = router;