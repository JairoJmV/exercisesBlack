//2. dado un arreglo de notas, determinar el promedio de todas las notas

math = 2;
sciences = 4;
grammar = 3.5;
gym = 4.3;
music = 3;


const notas = [math, sciences, grammar, gym, music];
const promedio = notas.reduce((a,b) => a + b, 0) / notas.length;
console.log(promedio);
