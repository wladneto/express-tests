var express = require('express');
var router = express.Router();

/* GET health listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(
    {
      health: "OK"
    }
  )
  
});

module.exports = router;
