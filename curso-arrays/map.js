const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);
console.log(`Notas atualizadas: ${notasAtualizadas}`);
