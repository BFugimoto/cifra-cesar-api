const { cifra } = require('../models/cipherModels');

function criptografar(req, res){
    const { texto, chave } = req.body;

    if(typeof texto !== 'string' || typeof chave !== 'number'){
        return res.status(400).json({ error: 'O texto deve ser uma string e a chave um número inteiro.'})
    }
    try{
        const resultado = cifra(texto, chave);
        res.json({ resultado });
    }catch(error){
        res.status(500).json({ error: 'Erro ao criptografar.' });
    }
}

function descriptografar(req, res){
    const { texto, chave } = req.body;

    if(typeof texto !== 'string' || typeof chave !== 'number'){
        return res.status(400).json({ error: 'O texto deve ser uma string e a chave um número inteiro.'})
    }
    try{
        const resultado = cifra(texto, -chave);
        res.json({ resultado });
    }catch(error){
        res.status(500).json({ error: 'Erro ao descriptografar.' });
    }
}

module.exports = { criptografar, descriptografar };