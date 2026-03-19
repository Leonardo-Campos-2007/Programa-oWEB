let adicionar = document.getElementById("adicionar");
let retirar = document.getElementById("retirar");
let contador = document.getElementById9("contador");
let saida = 0;

adicionar.onclick = function () {
    saida++;
    contador.innerHTML = saida;


}

retirar.onclick = function () {
    saida--;
    contador.innerHTML = saida;
}