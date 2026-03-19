let botao1 = document.getElementById("botao1");

botao1.onclick = function(){
    alert("Primeiro Evento");
};

botao1.onclick = function(){
    botao1.textContent = "Texto  Alterado"
}


let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){

    botao2.style.backgroundColor = "red";

};


botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
};

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique"
}

let campoEntrda = document.getElementById("campo");
let resultado = document.getElementById("resultado");
campoEntrda.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("teste");
        resultado.innerHTML = campoEntrda.value;
        campoEntrda.value = "";
    }
}

let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");
botao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro Evento";

});

botao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo Evento";

});










