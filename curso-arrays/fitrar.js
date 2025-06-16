const alunos = ["Artur", "Ana", "João", "Maria", "Pedro", "Lucas", "Fernanda"];
const notas = [7, 8, 6, 9, 5, 10, 8];

//exemplo de filter
// const tamanhoNome = alunos.filter((aluno) =>{
//     return aluno.length < 4;
// })
// console.log(`Alunos com nome menor que 4 letras: ${tamanhoNome}`);

const alunosAprovados = alunos.filter((aluno, index) => {
    return notas[index] >= 7;
}
);
console.log(`Alunos aprovados: ${alunosAprovados}`);
//exemplo de filter com map
const alunosAprovadosComNotas = alunos.filter((aluno, index) => {
    return notas[index] >= 7;
}).map((aluno, index) => {
    return `${aluno} - ${notas[index]}`;
});
console.log(`Alunos aprovados com notas: ${alunosAprovadosComNotas}`);
//exemplo de filter com map e reduce
const alunosAprovadosComNotasEMedia = alunos.filter((aluno, index) => {
    return notas[index] >= 7;
}).map((aluno, index) => {
    return `${aluno} - ${notas[index]}`;
}).reduce((acumulador, aluno) => {
    return `${acumulador}, ${aluno}`;
});
console.log(`Alunos aprovados com notas e média: ${alunosAprovadosComNotasEMedia}`);