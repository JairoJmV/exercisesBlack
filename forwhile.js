// ex: const = 3 imprimir */**//***///
const caracter = 7;
let mul = ' ';

for (let index = 0; index <= caracter; index++) {
        mul = mul + new Array(index).fill('*').join('');
        mul = mul + new Array(index).fill('/').join('');
};
console.log(mul);