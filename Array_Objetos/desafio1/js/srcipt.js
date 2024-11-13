


const pessoa =[
    {   
        nome: "Eduardo", email: "eduardo@emailfalso.com"},
        {nome: "Maria",  email: "maria@emailfalso.com"},
        {nome: "Breno",  email: "Breno@emailfalso.com"},
        {nome: "camile", email: "camile@emailfalso.com"},
        {nome: "ryan",   email: "ryan@emailfalso.com"},
        {nome: "seba",   email: "seba@emailfalso.com"

    }
]

const user = document.getElementById("user")


for(let i = 0; i < pessoa.length; i++ ){
    console.log(pessoa[i].nome)
    user.innerHTML += "<ul>"+ pessoa[i].nome +" : " + pessoa[i].email + "</ul>"
}