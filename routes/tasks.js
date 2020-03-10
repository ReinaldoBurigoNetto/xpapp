var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res) {
  res.status(200).json({msg:'Implementar'});
});
/* GET single task listing. */
router.get('/:id', function(req, res) {
  let id = req.params.id;
  res.status(200).json({msg:'Implementar'});
});

/* POST single task listing. */
router.post('/', function(req, res) {
  res.status(200).json({msg:'Implementar'});
});

/* PUT single task listing. */
router.put('/:id', function(req, res) {
  res.status(200).json({msg:'Implementar'});
});

/* DELETE single task listing. */
router.delete('/:id', function(req, res) {
  res.status(200).json({msg:'Implementar'});
});


module.exports = router;