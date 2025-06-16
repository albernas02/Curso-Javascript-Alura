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

    function exibirTelefones(telefone1, telefone2){
        console.log(`ligar para ${telefone1}`)
        console.log(`ligar para ${telefone2}`)
    }
    exibirTelefones(estudante.telefones[0],estudante.telefones[1]);

    const dadosEnvio = {
        destinatario: estudante.nome,
        rua : estudante.endereco[0].rua,
        numero : estudante.endereco[0].numero,
    }
    console.log(dadosEnvio)


    const fichaGuerreiro ={
        nome: 'Artur',
        classe: 'guerreiro'
    }
    const equipeGuerreiro ={
        grupo: 'grupo',
        poder: 'gelo'
    }
    const guerreiro = {...fichaGuerreiro, ...equipeGuerreiro};
    console.log(guerreiro)