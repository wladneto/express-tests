const express = require('express');
const router = express.Router();
const packageJson = require('../package.json');

/* GET health listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(
    {
      appName: packageJson.name,
      version: packageJson.version,
      status: 'up',
      uptime: process.uptime(),
      timestamp: Date.now()
    }
  )
  
});

module.exports = router;
