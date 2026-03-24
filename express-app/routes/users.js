const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const items = [
    {
      "id": 1,
      "name": "Sasha"
    },
    {
      "id": 2,
      "name": "Masha"
    },
  ]
  res.json(items);
});

module.exports = router;
