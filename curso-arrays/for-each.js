const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
let somaDasNotas = 0;
notas.forEach((nota, index) => {
    console.log(`Nota do aluno ${index + 1}: ${nota}`);
    somaDasNotas += nota;
});
const media = somaDasNotas / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);