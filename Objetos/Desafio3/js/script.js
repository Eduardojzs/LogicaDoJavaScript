
/// DeSafio 3

const endereco = {
    rua: "Fernanda",
    numero: 883
};

const pessoa = {
    nome: "Eduardo",
    sobrenome: "Jose",
    endereco
};


// Fazendo um loop em objeto

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}