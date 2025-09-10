const express = require('express');
const app = express();

const porta = 3000;

app.use(express.json());

function validarChave(chave){
    const regex = /^-?\d+$/;
    const n = Number(chave);

    if (!regex.test(chave)){
        return message = 'A chave deve ser um número inteiro.';
    }
    return ((n % 26) + 26) % 26
}

function mudarLetra(letra, chave){
    const codigo = letra.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90){
        return String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
    }
    if (codigo >= 97 && codigo <= 122){
        return String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
    }
    return letra;
}

function cifra(texto, chave){
    const chaveValida = validarChave(chave);
    let resultado = '';
    for (let i = 0; i < texto.length; i++){
        resultado += mudarLetra(texto[i], chaveValida);
    }
    return resultado;
}

app.get('/', (req, res) => {
    res.send({'message': 'Servidor rodando'});
});

app.post('/api/criptografar', (req, res) => {
    const { texto, chave } = req.body;
    if (typeof texto !== 'string' || typeof chave !== 'string') {
        return res.status(400).json({ error: 'Texto e chave devem ser do tipo string.'});
    }
    try {
        const resultado = cifra(texto, chave);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criptografar o texto.' });
    }
});

app.post('/api/descriptografar', (req, res) => {
    const { texto, chave } = req.body;
    if (typeof texto !== 'string' || typeof chave !== 'string') {
        return res.status(400).json({ error: 'Texto e chave devem ser do tipo string.'});
    }
    try {
        const resultado = cifra( texto, -validarChave(chave));
        return res.json({ resultado });
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao descriptografar o texto.' });
    }
});

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
});