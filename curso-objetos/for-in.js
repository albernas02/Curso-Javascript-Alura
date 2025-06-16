const estudante = {
  nome: 'João',
  idade: 20,
  cpf: '123.456.789-00',
  turma: 'A',
  telefones: ['(11) 98765-4321', '(11) 91234-5678'],
    endereco: [{
        rua: 'Rua A',
        numero: 123,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        complemento: 'Casa 1',
    },
    {
    rua: 'Rua B',
    numero: 456,
    bairro: 'Jardim',
    cidade: 'São Paulo',
    estado: 'SP',
    complemento: 'Apto 101',
    }]};

    for (let chave in estudante) {
        console.log(chave);
    }

    for (let chave in estudante) {
        const tipo = typeof estudante[chave];
        if (tipo !== 'object' && tipo != 'function') {
            const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
            console.log(texto);
        }
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
        
