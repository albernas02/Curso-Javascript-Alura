const fs = require('fs');

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) =>{
    quebraParagrafos(texto);
    console.log(texto)
})

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {}
    listaPalavras.forEach(palavra =>{
        if(palavra.lenght>=3){
            const palavrasLimas = limpaPalavras()
            resultado[palavrasLimas] = (resultado[palavra] || 0) +1;
        }
    })
    return resultado
} 
function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function quebraParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
})
    console.log(contagem)
}