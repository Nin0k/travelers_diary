export {};
const { Router } = require('express');
const Resort = require('../models/RestPlaceSchema');
const router = Router();

// router.get('/createcard', async (req, res) => {
//   try {
//     const place = new Resort({
//       id: '12qwe',
//       country: 'Страна',
//       location: 'Город',
//       description: 'Описание',
//     });
//     await place.save();
//     console.log('успех');
//   } catch (e) {
//     console.log(e.message);
//   }
// });

router.post('/create', async (req, res) => {
  try {
    console.log('Создание');
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    console.log('Редактирование');
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
