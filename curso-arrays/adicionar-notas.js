const notas = [10,6,8];
notas.push(5); // Adiciona a nota 5 ao final do array
notas.unshift(9); // Adiciona a nota 9 no início do array
console.log(notas); // [9, 10, 6, 8, 5]
notas.pop(); // Remove a última nota do array
console.log(notas); // [9, 10, 6, 8]
notas.shift(); // Remove a primeira nota do array
console.log(notas); // [10, 6, 8]
notas.splice(1, 1); // Remove a nota na posição 1 (segunda nota)
console.log(notas); // [10, 8]
notas.splice(1, 0, 7); // Adiciona a nota 7 na posição 1 (segunda posição)
console.log(notas); // [10, 7, 8]