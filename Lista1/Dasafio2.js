const prompt = require("prompt-sync")();

//Rode todos o código usando o comando "node Desafio2.js" no terminal

console.log("Vamos jogar pedra papel tesoura!");



while (true){

    const usuario = prompt("Escolha 1 - pedra, 2 - papel ou 3 - tesoura: ");
    const computador = Math.floor(Math.random() * 3) + 1;

    if(usuario == computador){
        console.log("Empate! Tente novamente.");
    }
    else if((usuario == 1 && computador == 3) || (usuario == 2 && computador == 1) || (usuario == 3 && computador == 2)){
        console.log("Você escolheu " + usuario + " e o computador escolheu " + computador);
        console.log("Parabéns! Você venceu!");
    }
    else if(usuario > 3 || usuario < 1){
        console.log("Opção inválida! Por favor, escolha 1, 2 ou 3.");
    }
    else{
        console.log("Você escolheu " + usuario + " e o computador escolheu " + computador);
        console.log("Que pena! O computador venceu!");
    }
}