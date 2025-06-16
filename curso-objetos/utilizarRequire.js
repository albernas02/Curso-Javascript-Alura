const dados = require('./dados.json');

console.log(dados);

const produto = {
    id : 6,
    nome: "cueca",
    preco: 58.99
}
JSON.stringify(produto);
console.log(produto);