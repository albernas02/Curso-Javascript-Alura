const estudante = {
  nome: 'João',
  idade: 20,
  cpf: '123.456.789-00',
  turma: 'A',
  bolsista: true,
  telefones: ['(11) 98765-4321', '(11) 91234-5678'],
    // endereco: [{
    //     rua: 'Rua A',
    //     numero: 123,
    //     bairro: 'Centro',
    //     cidade: 'São Paulo',
    //     estado: 'SP',
    //     complemento: 'Casa 1',
    // },
    // {
    // rua: 'Rua B',
    // numero: 456,
    // bairro: 'Jardim',
    // cidade: 'São Paulo',
    // estado: 'SP',
    // complemento: 'Apto 101',
    // }]
    };

    const chaves = Object.keys(estudante);
    console.log(chaves);

    if (chaves.includes('endereco')) {
        console.log('O estudante possui um endereço cadastrado.');
    }
    else {
        console.error('O estudante não possui um endereço cadastrado.');
    }