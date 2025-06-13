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
