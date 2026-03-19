let adicionar = document.getElementById("adicionar");
let retirar = document.getElementById("retirar");
let contador = document.getElementById("contador");
let saida = 0;

adicionar.onclick = function () {
    saida++;
    contador.innerHTML = saida;


}

retirar.onclick = function () {
    saida--;
    contador.innerHTML = saida;
    if (saida < 0) {
        alert("Valor negativo");
        saida = 0;
    }
}


let caixa = document.getElementById("caixa");
let paragrafo = document.getElementById("paragrafo")
let btn = document.getElementById("btn")

btn.onclick = function () {
    paragrafo.innerHTML += "<br>" + caixa.value
}


let contador2 = document.getElementById("contador2");

caixa.addEventListener("input", function () {
    let semEspacos = caixa.value.replace(/ /g, "");
    contador2.textContent = semEspacos.length;
});


let ordenada = document.getElementById("ordenada");
let naoordenada = document.getElementById("naoordenada");
let tipolista = document.getElementById("tipolista");

ordenada.onclick = function () {
    tipolista.innerHTML = "<ol><li>Primeiro</li><li>Segundo</li></ol>";
}

naoordenada.onclick = function () {
    tipolista.innerHTML = "<ul><li>Primeiro</li><li>Segundo</li></ul>";
}

let reset = document.getElementById("reset");

reset.onclick = function () {

    location.reload();

}