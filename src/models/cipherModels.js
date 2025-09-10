function validarChave(chave){
    if(typeof chave !== 'number' || !Number.isInteger(chave)){
        throw new Error('A chave deve ser um número inteiro.');
    }
    return ((chave % 26) + 26) %26;
}

function mudarLetra(letra, chave){
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';

    if(maiusculas.includes(letra)){
        const indice = maiusculas.indexOf(letra);
        const novoIndice = (indice + chave) % 26;
        return maiusculas[novoIndice];
    } else if (minusculas.includes(letra)){
        const indice = minusculas.indexOf(letra);
        const novoIndice = (indice + chave) % 26;
        return minusculas[novoIndice];
    }
    return letra;
}

function cifra(texto, chave){
    const chaveValidada = validarChave(chave);
    let resultado = '';
    for(let i =0; i < texto.length; i++){
        resultado += mudarLetra(texto[i], chaveValidada);
    }
    return resultado;
}

module.exports = {cifra};