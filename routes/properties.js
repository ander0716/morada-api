const express = require('express');
const router = express.Router();
const { properties, properti, createProperti } = require('../controllers/propertyCtrl')

router.get('/propertys', properties);
router.get('/property/:id', properti);
router.post('/property', createProperti);

module.exports = router;