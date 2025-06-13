const estudanteReprovou = function (notaFinal, faltas) {
    const media = 7;
    const faltasMaximas = 3;
    const advertencia = false; // Supondo que não há advertência    
    if (faltas > faltasMaximas) {
        return true; // Reprovado por faltas
    }

    if (notaFinal < media) {
        return true; // Reprovado por nota
    }

    return false; // Aprovado
}
estudanteReprovou(6, 2) ? console.log("Estudante reprovou") : console.log("Estudante aprovado");
