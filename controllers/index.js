const router = require('express').Router();
const { Abba, BandAid } = require('../models');

router.get('/', (req, res) => res.send('Does this thing really work?'));

module.exports = router;
