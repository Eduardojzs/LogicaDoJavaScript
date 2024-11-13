// Array - Soma total dos números

const numeros = [10, 10, 10, 10, 10, 100, NaN, true, "String", "100", undefined, false, null];

// Uso para somar os números


let soma = 0

for( let i = 0; i < numeros.length; i++){

   const NumerosSomados = numeros[i] 

   if(!isNaN([NumerosSomados]) && typeof NumerosSomados === 'number')
      // usei  para vericiar se tem só números
   soma = soma + NumerosSomados

  
}

console.log(soma);