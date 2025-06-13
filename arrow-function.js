const estudanteReprovou = (notaFinal, faltas) => {
    if(notaFinal < 7 || faltas > 3) {
        return true; // Reprovado
    }else{
        return false; // Aprovado
    }
}
estudanteReprovou(6, 2) ? console.log("Estudante reprovou") : console.log("Estudante aprovado");

const exibeNome = (nome) => nome;
console.log(exibeNome("Artur"));