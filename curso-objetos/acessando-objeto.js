const estudante = {
  nome: 'João',
  idade: 20,
  cpf: '123.456.789-00',
  turma: 'A'
};

function exibirDadosEstudante(estudante) {
  console.log(`Nome: ${estudante.nome}`);
  console.log(`Idade: ${estudante.idade}`);
  console.log(`CPF: ${estudante.cpf}`);
  console.log(`Turma: ${estudante.turma}`);
}
exibirDadosEstudante(estudante);