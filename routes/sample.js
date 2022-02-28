const express = require('express');
const router = express.Router();
const sample = require('../db/sample');

router.post('/', async (req, res, next) => {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
 
  try {
    const result = await sample.insert({ nome, idade });
    console.log(result);
    res.status(201).send({result:result});
  } catch (err) {
    next(err);
  }
})

module.exports = router;