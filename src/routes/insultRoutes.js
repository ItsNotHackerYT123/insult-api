const express = require('express');
const { getRandomInsult } = require('../services/insultService');

const router = express.Router();

router.get('/', (req, res) => {
  const insult = getRandomInsult();
  res.json({ insult });
});

module.exports = router;