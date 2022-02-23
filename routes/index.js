const express = require('express');
const router = express.Router();
const pjson = require('../package.json');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await  global.db.findAll();
    res.status(200).send({banco:docs});
  } catch (err) {
    next(err);
  }
})


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.status(200).send(
//     {
//       message: 'Welcome',
//       appName: pjson.name,
//       version: pjson.version
//     }
//   )

//   //res.render('index', { title: 'Express' });
// });

module.exports = router;
