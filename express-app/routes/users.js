const express = require('express');
const router = express.Router();

const items =[
  {
    "id": 1,
    "name": "Sasha"
  },
  {
    "id": 2,
    "name": "Masha"
  },
];
let id = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(items);
});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  items.push({
    "id": items.length + 1,
    "name": newUser.name,
  });
  res.status(201).json(newUser);
})

module.exports = router;
