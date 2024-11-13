// Desafio 1 - Dia da semana

const ArrayDiaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

const DiaDaSemana = new Date();

const DiaDaSemanaAtual = DiaDaSemana.getDay();
//alert("Olá, hoje é " + ArrayDiaDaSemana[DiaDaSemanaAtual]);



if(DiaDaSemanaAtual === 0 ){
      console.log("Domingo");
}if(DiaDaSemanaAtual === 1 ){
      console.log("Segunda-Feira");
}if(DiaDaSemanaAtual === 2 ){
      console.log("Terça-Feira");
}if(DiaDaSemanaAtual === 3){
    console.log("Quarta-Feira");
}if(DiaDaSemanaAtual === 4 ){
      console.log("Quinta-Feira");
}if(DiaDaSemanaAtual === 5){
   console.log("Sexta-Feira");
}if(DiaDaSemanaAtual === 6){
    console.log("Sábado");
};