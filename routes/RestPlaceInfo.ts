export {};
const { Router } = require('express');
const router = Router();

router.get('/all', () => {
  console.log('all');
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
});

module.exports = router;
