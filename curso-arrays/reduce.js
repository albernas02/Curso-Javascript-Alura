const salaJS = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
const salaPython = [6.0, 7.5, 8.0, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
const salaJava = [7.0, 8.5, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];

function calcularMedia(sala) {
    const total = sala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    return total / sala.length;
}
const mediaJS = calcularMedia(salaJS);
const mediaPython = calcularMedia(salaPython);
const mediaJava = calcularMedia(salaJava);
console.log(`Média da sala de JavaScript: ${mediaJS}`);
console.log(`Média da sala de Python: ${mediaPython}`);
console.log(`Média da sala de Java: ${mediaJava}`);