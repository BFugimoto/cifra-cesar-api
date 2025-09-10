# API: Cifra de César

## O que é a Cifra de César?
A cifra de César é um método de criptografia de **substitução** simples criada para codificar mensagens.

## Qual é o "segredo" da cifra de César?
O segredo da cifra de César é a **quantidade de deslocamento**, conhecida também como **chave**.

## Vulnerabilidade
Atualmente, a cifra de César é **extremamente fraca**, pois há um número limitado de **25 deslocamentos possíveis**, sendo possível de ser descriptografada somente testando todas as opções rapidamente ou a mensagem pode também ser deduzida somente pela **análise de frequência**, ou seja, analisando quais letras aparecem com mais frequência em determinada uma língua.

## Uso histórico
A cifra de César foi extremamente usada na Roma antiga, na época em que a cifra rebeu seu nome por causa de Júlio César, usando-a para se comunicar de forma segura.

## Requsitos
- Node.js (>= 14)
- VSCode
- Extensão VSCode: REST Client

## Instalação
```bash
npm install
```

## Execução
```bash
npm start
```

## Como testar os Endpoints
Crie arquivo dentro de cifra-de-cesar-api: testes-api.http
E copie as seguintes requisições:
```http
POST http://localhost:3000/api/criptografar
Content-Type: application/json
{
    "texto": "Texto a ser criptografado",
    "chave": 3
}
```

```http
POST http://localhost:3000/api/descriptografar
Content-Type: application/json

{
    "texto": "Texto a ser descriptografado",
    "chave": 3
}
```

## Referências
- Curso: Sistemas para Internet
- Disciplina: Seguranca na Web
