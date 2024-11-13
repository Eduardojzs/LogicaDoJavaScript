// Modificando titulo com dom

let titulo = document.getElementById("titulo");

let p = document.getElementById("paragrafo");

let user = document.getElementById("user");

let lista = document.getElementById("listaTarefas");

titulo.textContent = "titulo Modificado";

p.innerHTML = "Esse titulo tem <b> Negrito </b>";

// incluir nova abordagem em uma lista

lista.innerHTML += "<li>Procurar um emprego</li>"
