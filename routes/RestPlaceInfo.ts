const { Router } = require('express');
const router = Router();

router.get('/all', () => {
  console.log('all');
});

router.get('/id', () => {
  console.log('id');
});

module.exports = router;
