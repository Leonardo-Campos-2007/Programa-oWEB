const prompt = require("prompt-sync")();

//Rode todo o código usando o comando "node Desafio4.js" no terminal
while (true) {
    const usuario = prompt("Digite um numero: ");

    for (let i = 1; i <= usuario; i++) {
        console.log("*".repeat(i));
    }

}