//Arreglo con While
const arreglo = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0]
let numUno = 0
let numCero = 0
let index = 0

while(index < arreglo.length){
    if(arreglo[index] === 0){
        numCero++;
    }if(arreglo[index] === 1){
        numUno++;
    }
    index++;
}
console.log(numUno);
console.log(numCero);

/* Arreglo con For
const arreglo = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0]
let numUno = 0
let numCero = 0

for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[index] === 0){
        numCero++;
    }if(arreglo[index] === 1){
        numUno++;
    }
}
console.log(numUno);
console.log(numCero);
*/