const listaEstudantes = [
  "João",
  "Maria",
  "Pedro",
  "Ana",
  "Lucas",
  "Carla",
  "Fernanda",
  "Rafael",
  "Beatriz",
  "Gustavo",
];
const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
console.log("Sala 1:", sala1); // ["Carla", "Fernanda", "Rafael", "Beatriz", "Gustavo"]
console.log("Sala 2:", sala2); // ["João", "Maria", "Pedro", "Ana", "Lucas"]