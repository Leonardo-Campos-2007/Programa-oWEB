const prompt = require("prompt-sync")();

//Rode todo o código usando o comando "node Desafio3.js" no terminal

while (true) {

    const numero = prompt("escolha um numero de 1 a 10: ");

    for (let i = 1; i <= 10; i++) {

        console.log(numero + " X " + i + " = " + (numero * i));

    }
}
