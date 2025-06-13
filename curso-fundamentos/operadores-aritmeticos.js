const notaPrimeiroBimestre = 10;
const notaSegundoBimestre = 0;
const notaTerceiroBimestre = 0;
const notaQuartoBimestre = Number.parseFloat('5.50');

let totalNotas = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre;
let media = totalNotas / 4;
console.log("Media:", media.toFixed(2));

if(media >= 7) {
    console.log("Aprovado");
}
else if(media >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}