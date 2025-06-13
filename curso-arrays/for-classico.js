const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
const alunos = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas', 'Carla', 'Fernanda', 'Rafael', 'Isabela'];
const listaAlunosENotas = [alunos, notas];

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota do aluno ${alunos[i]}: ${notas[i]}`);
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

for(let i = 0; i < listaAlunosENotas[0].length; i++) {
    console.log(`O aluno ${listaAlunosENotas[0][i]} esta aqui`);
    for(let j = 0; j < listaAlunosENotas[1].length; j++) {
        if(listaAlunosENotas[0][i] === listaAlunosENotas[0][j]) {
            console.log(`O aluno ${listaAlunosENotas[0][i]} tem nota ${listaAlunosENotas[1][j]}`);
        }
    }
}