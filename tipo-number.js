const notaPrimeiroBimestre = 10;
const notaSegundoBimestre = 10;
const notaTerceiroBimestre = 10;
const notaQuartoBimestre = Number.parseFloat('10.50');
let totalNotas = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre;
let media = totalNotas / 4;
console.log("Nota do primeiro bimestre:", notaPrimeiroBimestre);
console.log("Nota do segundo bimestre:", notaSegundoBimestre);
console.log("Nota do terceiro bimestre:", notaTerceiroBimestre);
console.log("Nota do quarto bimestre:", notaQuartoBimestre);
console.log("Total de notas:", totalNotas);

console.log("Média:", media.toFixed(2));