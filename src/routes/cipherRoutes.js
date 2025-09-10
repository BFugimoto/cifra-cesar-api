const express = require('express');
const router = express.Router();
const { criptografar, descriptografar } = require('../controllers/cipherControllers');

router.get('/', (req, res) => {
    res.send({ message: 'Servidor rodando.'});
});

router.post('/api/criptografar', criptografar);
router.post('/api/descriptografar', descriptografar);

module.exports = router;