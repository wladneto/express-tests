const express = require('express');
const router = express.Router();
const sample = require('../db/sample');

/* GET home page from sample_colletion*/
router.get('/', async (req, res, next) => {
  try {
    const docs = await  sample.findAll();
    res.status(200).send({sample_collection:docs});
  } catch (err) {
    next(err);
  }
})

module.exports = router;