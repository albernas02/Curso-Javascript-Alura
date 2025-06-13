const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];

let soma = 0;
for (const nota of notas) {
  soma += nota;
}
const media = soma / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

for (nota of notas) {
  console.log(`Nota: ${nota}`);
}
function exibirNotas() {
  for (const nota of notas) {
    console.log(`Nota: ${nota} index: ${notas.indexOf(nota)}`);
  }
}
exibirNotas();
function somarNotas() {
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  return soma;
}
const totalNotas = somarNotas();
console.log(`Total de notas: ${totalNotas}`);

function calculaMaiorEMenor() {
  let maior = notas[0];
  let menor = notas[0];
  for (const nota of notas) {
    if (nota > maior) {
      maior = nota;
    }
    if (nota < menor) {
      menor = nota;
    }
  }
  console.log(`maior: ${maior} menor${menor}`);
  return { maior, menor };
}

calculaMaiorEMenor();

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pares() {
  const numerosPares = [];
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }
  return numerosPares;
}
console.log(`Números pares: ${pares()}`);
function impares() {
  const numerosImpares = [];
  for (const numero of numeros) {
    if (numero % 2 !== 0) {
      numerosImpares.push(numero);
    }
  }
  return numerosImpares;
}
console.log(`Números ímpares: ${impares()}`);