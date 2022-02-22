const express = require('express');
const router = express.Router();

/* GET health listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(
    {
      message: 'OK',
      uptime: process.uptime(),
      timestamp: Date.now()
    }
  )
  
});

module.exports = router;
