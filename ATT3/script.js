let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for (let i=0; i < paragrafo1.length; i++) {
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

let destino = document.getElementById("elemento");
let p = document.createElement("p");
p.textContent = "Parágrafo criado via JS";
destino.append(p);

let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["Arroz", "Feijão", "Picanha", "Mineiro", "Coca-cola"];
for (let i = 0; i < itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);

}

lista.append(ul);


function somar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}


let botao = document.getElementById("botao1")
botao.onclick = function(){
    alert("Hello, Word")
    botao.textContent = "Você clicou "
    botao.style.backgroundColor = "blue"
}
