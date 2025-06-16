const nomes = ['Ana', 'Ana','João', 'João', 'Maria', 'Pedro','Pedro', 'Lucas', 'Lucas', 'Fernanda'];
const nomesUnicos = [...new Set(nomes)];
// const listaNomesUnicos = Array.from(nomesUnicos);
// listaNomesUnicos.push('João', 'Ana', 'Fernanda'); // Adicionando nomes duplicados para testar a unicidade
// console.log(`Lista de nomes únicos: ${listaNomesUnicos}`);
// console.log(`Nomes: ${nomes}`);
console.log(`Nomes únicos: ${[...nomesUnicos]}`);

const listaCores = ['azul', 'vermelho', 'verde', 'amarelo'];
const listaCores2 = ['azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo'];
const lista = listaCores.concat(listaCores2);
const listaUnica = [...new Set(lista)];
console.log(`Lista de cores: ${lista}`);
console.log(`Lista de cores únicas: ${listaUnica}`);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
}
);
const impares = numeros.filter((numero) => {
    return numero % 2 !== 0;
}
);
console.log(`Números pares: ${pares}`);
console.log(`Números ímpares: ${impares}`);