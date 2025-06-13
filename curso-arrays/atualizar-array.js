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
listaEstudantes.splice(1,2); // Remove 2 estudantes a partir do índice 1
listaEstudantes.push("Rodrigo"); // Adiciona Rodrigo ao final da lista
console.log("Lista atualizada de estudantes:", listaEstudantes); // ["Pedro", "Ana", "Lucas", "Carla", "Fernanda", "Rafael", "Beatriz", "Gustavo", "Rodrigo"]
