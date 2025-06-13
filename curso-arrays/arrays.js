const numeros = [1, 2, 3, 4, 5];
const numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares.push(numeros[i]);
  }
}
console.log(numerosPares); // [2, 4]
const numerosImpares = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    numerosImpares.push(numeros[i]);
  }
}
console.log(numerosImpares); // [1, 3, 5]

const arrayDeStrings = ["maçã", "banana", "laranja", "uva"];
const arrayDeStringsComTamanhoMaiorQueCinco = [];
for (let i = 0; i < arrayDeStrings.length; i++) {
  if (arrayDeStrings[i].length > 5) {
    arrayDeStringsComTamanhoMaiorQueCinco.push(arrayDeStrings[i]);
  }
}
console.log(arrayDeStringsComTamanhoMaiorQueCinco); // ["banana", "laranja"]