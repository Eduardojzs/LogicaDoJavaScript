

const mercadoria = [

    {
        nome: "lapis",
        preco: 1,
        quantidade: 5
    },

    {
        nome: "caneta",
        preco: 2,
        quantidade: 10
    },

    {
        nome: "caderno",
        preco: 10,
        quantidade: 3
    }

]

const table = document.getElementById("table");

for(let i = 0; i < mercadoria.length; i++){

    console.log(mercadoria[i]);

    table.innerHTML += `<tr>
        <td>${mercadoria[i].nome}</td>
        <td> R$${mercadoria[i].preco.toFixed(2)}</td>
        <td>${mercadoria[i].quantidade}</td>
    <tr/>`

}
