class Atividade1e2 {
  constructor() {}
  configurar() {
    let nome = "Artur";
    let sobrenome = "Silva";
    let idade = 25;
    let estudante = true;
    let nomeCompleto = nome + " " + sobrenome;
    let nomeCompleto2 = `${nome} ${sobrenome}`;
    let aux;
    if (estudante) {
      aux = "SIM";
    } else {
      aux = "NÃO";
    }

    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Nome completo usando +:", nomeCompleto);
    console.log("Nome completo usando template string:", nomeCompleto2);
    console.log("Idade:", idade);
    console.log("É estudante?", aux);
  }
}

class Atividade3 {
  constructor() {}
  configurar() {
    let numero1 = 10;
    let nome = "Artur";
    let texto = `Olá, meu nome ${nome} e eu tenho R$${numero1} reais no bolso.`;

    console.log(texto);
  }
}
class Atividade4 {
  constructor() {}
  variaveis() {
    let variavel = "primeira declaração";
    console.log(variavel);
    variavel = "segunda declaração";
    console.log(variavel);
  }
  chuva() {
    let chuva = true;
    if (chuva) {
      console.log("Está chovendo, pegue o guarda-chuva!");
    } else {
      console.log("Não está chovendo, você pode sair sem guarda-chuva.");
    }
  }
}

const atividade1 = new Atividade1e2();
const atividade3 = new Atividade3();
const atividade4 = new Atividade4();

atividade1.configurar();
atividade3.configurar();
atividade4.variaveis();
atividade4.chuva();

// Fim das Atividades aula 1.

// Início das Atividades aula 2

class Atividade5 {
  constructor() {
    const texto = "Olá, mundo!";
    const tamanho = texto.length;
    console.log(`O texto "${texto}" tem ${tamanho} caracteres.`);
    console.log(`O texto "${texto}" em caixa alta é: ${texto.toUpperCase()}`);
  }
}

class Atividade6 {
  constructor() {
    let numero = 10;
    let texto = "10";
    console.log(
      `variavel numero convertida para string: ${numero.toString()} e variavel texto convertida para número: ${Number(
        texto
      )}`
    );
  }
}
const atividade5 = new Atividade5();
const atividade6 = new Atividade6();

// Fim das Atividades aula 2.
// Início das Atividades aula 3

class Atividade7 {
  constructor() {
    let operacao;
    let valor;
    let saldo = 1000;
  }
  realizarOperacao(operacao, valor) {
    if (operacao === "deposito") {
      this.saldo += valor;
      console.log(
        `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`
      );
    } else if (operacao === "saque") {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(
          `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`
        );
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    } else {
      console.log("Operação inválida.");
    }
  }
  verificaridade() {
    const pessoa = "Artur";
    const idade = 18;
    const podeEntrar = idade >= 18 ? "Pode Entrar" : "Não pode entrar";
    console.log(
      `${pessoa} tem ${idade} anos e ${
        podeEntrar ? "pode" : "não pode"
      } entrar na festa.`
    );
  }
  verificaAdministrador() {
    const usuario = "admin";
    const senha = "1234";
    const ehAdministrador = usuario === "admin" && senha === "1234";
    const estaLogado = ehAdministrador
      ? "Usuário é administrador e está logado."
      : "Usuário não é administrador ou não está logado.";
    console.log(estaLogado);}
}

const atividade7 = new Atividade7();
atividade7.realizarOperacao("deposito", 200);
atividade7.verificaridade();
atividade7.verificaAdministrador();

// Fim das Atividades aula 3.
// Início das Atividades aula 4

class Atividade8 {
    static saudacao(nome) {
        return `Olá, ${nome}!`;
    }
}

const mensagem = Atividade8.saudacao("Artur");
console.log(mensagem);

class Atividade9 {
    constructor() {
        const mensagem = (nome) => "Olá, " + nome + "!";
        console.log(mensagem("Artur"));
    }
}
const escrever = new Atividade9("artur");
