const estudante = {
  nome: "João",
  idade: 20,
  cpf: "123.456.789-00",
  turma: "A",
  bolsista: true,
  telefones: ["(11) 98765-4321", "(11) 91234-5678"],
  endereco: [{
    rua: "Rua A",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    complemento: "Casa 1",
  }],
};
console.log(estudante);
console.log(estudante.endereco);
console.log(estudante.endereco[0].rua);

estudante.endereco.push({
  rua: "Rua B",
  numero: 456,
  bairro: "Jardim",
  cidade: "São Paulo",
  estado: "SP",
  complemento: "Apto 101",
});

const listasEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);


console.log(estudante.endereco);
console.log(estudante.endereco[1].rua);
console.log(listasEnderecosComComplemento);
