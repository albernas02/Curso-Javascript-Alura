const lista = [
    ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas', 'Carla', 'Fernanda', 'Rafael', 'Isabela'],
    [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0],
]
function procuraEmLista(nome) {
    const indice = lista[0].indexOf(nome);
    if (indice !== -1) {
        return `O aluno ${nome} tem nota ${lista[1][indice]}`;
    } else {
        return `Aluno ${nome} não encontrado`;
    }
}
function procuraEmLista1(nome) {
    if (lista[0].includes(nome)) {
        const indice = lista[0].indexOf(nome);
        return `O aluno ${nome} tem nota ${lista[1][indice]}`;
    }
    return `Aluno ${nome} não encontrado`;  
}
function procuraEmLista2(nome) {
    if (lista[0].includes(nome)) {
        const [alunos, medias] = lista;
        const aluno = alunos.indexOf(nome);
        const media = medias[aluno];
        return `O aluno ${nome} tem nota ${media}`;
    }
    return `Aluno ${nome} não encontrado`;  
}
// Testando a função
console.log(procuraEmLista('João')); // O aluno João tem nota 7.5
console.log(procuraEmLista1('Artur')); // O aluno João tem nota 7.5
console.log(procuraEmLista2('José')); // O aluno João tem nota 7.5