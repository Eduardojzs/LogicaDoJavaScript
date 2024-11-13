// pegar o numero que esta no meio da array


const numeros = [10, 10, 10, 10, 10, 100, NaN, true, "String", "100", undefined, false, null];


let meio = parseInt(numeros.length/2);

console.log("o número que esta no meio é: " + numeros[meio]);