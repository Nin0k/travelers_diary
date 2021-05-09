export {};
const { Router } = require('express');
const Resort = require('../models/RestPlaceSchema');
const router = Router();

router.post('/create', async (req, res) => {
  try {
    console.log('Создание');
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put('/edit', async (req, res) => {
  try {
    console.log('Редактирование');
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
