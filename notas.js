//2. dado un arreglo de notas, determinar el promedio de todas las notas
const notas = [2, 4, 5]
let promedio = 0

for (let index = 0; index < notas.length; index++) {
    promedio = promedio + notas[index]
}

console.log(promedio / notas.length)

// arreglos con 0 y 1 ¿hay mas 0 o hay mas 1?

