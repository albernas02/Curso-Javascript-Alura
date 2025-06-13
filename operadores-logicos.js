const notafinal = 7.5;
const faltas = 0;
const advertencia = 1;

if (notafinal >= 7 && faltas <= 4 && !advertencia) {
  console.log("Aprovado");
} else if (notafinal >= 5 && faltas <= 4 && !advertencia) {
  console.log("Recuperação");
} else if (advertencia) {
  console.log("Reprovado por advertencia");
}
//usando pippeline

if (notafinal <= 7 || faltas >= 4) {
  console.log("reprovado");
} else if (notafinal <= 5 && faltas >= 4) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

const pessoa = "Artur";
const idade = 18;
const habilitacao = true;
const podeDigitar =
  idade >= 18 && habilitacao ? "Pode digitar" : "Não pode digitar";
console.log(
  `${pessoa} tem ${idade} anos e ${
    habilitacao ? "possui" : "não possui"
  } habilitação. Resultado: ${podeDigitar}`
);
