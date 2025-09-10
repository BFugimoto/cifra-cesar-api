const express = require('express');
const router = express.Router();
const { criptografar, descriptografar } = require('../controllers/cipherControllers');

router.get('/', (req, res) => {
    res.send({ message: 'Servidor rodando.'});
});

router.post('/criptografar', criptografar);
router.post('/descriptografar', descriptografar);

module.exports = router;