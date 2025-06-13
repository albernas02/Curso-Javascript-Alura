const alunos = ["João", "Maria", "José"];
const notas = [7.5, 8.0, 6.5];
const listaAlunosENotas = [alunos, notas];
console.log("Lista de Alunos e Notas:", listaAlunosENotas); // [['João', 'Maria', 'José'], [7.5, 8.0, 6.5]]
console.log(
  `o aluno da posição 0 é ${listaAlunosENotas[0][0]} e sua nota é ${listaAlunosENotas[1][0]}`
); // o aluno da posição 0 é João e sua nota é 7.5




const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if(array[i]<3 || array[i]>7){
        array.splice(i, 1);
        i--; // Decrementa o índice para compensar a remoção
    }
}
console.log(array); // [3, 4, 5, 6, 7]

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];
frutas.splice(1,2, "kiwi", "pessego"); // Remove 2 frutas a partir do índice 1
console.log("Lista atualizada de frutas:", frutas); // ["maçã", "uva, abacaxi", "kiwi"]

const menuPrincipal = ["salada", "sopa", "prato principal", "sobremesa", "bebida"];
const menuSobremesa = ["sorvete", "pudim", "torta de maçã"];
const menuCompleto = menuPrincipal.concat(menuSobremesa);
console.log("Menu Completo:", menuCompleto); // ["salada", "sopa", "prato principal", "sobremesa", "bebida", "sorvete", "pudim", "torta de maçã"]