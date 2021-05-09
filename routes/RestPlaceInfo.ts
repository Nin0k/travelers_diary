export {};
const { Router } = require('express');
const router = Router();
const Resort = require('../models/RestPlaceSchema');

router.get('/all', async (req, res) => {
  try {
    const all = await Resort.find();
    res.status(200).send(all);
  } catch {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.id);
    res.status(200).send(resort);
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
