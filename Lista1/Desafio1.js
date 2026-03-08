const prompt = require("prompt-sync")();

//Rode todos o código usando o comando "node Desafio1.js" no terminal

console.log("Tente adivinhar o número que estou pensando entre 1 e 20!");

const numero = Math.floor(Math.random() * 20) + 1;

let tentativa = 0;
let resposta;

while (resposta != numero) {

    resposta = Number(prompt("Digite um número entre 1 e 20: "));
    tentativa++;

    if (resposta == numero) {
        console.log("Você acertou o número em " + tentativa + " tentativas!");
    } else {
        console.log("Tente novamente!");
    }

}