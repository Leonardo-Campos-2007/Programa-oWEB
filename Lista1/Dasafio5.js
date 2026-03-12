const prompt = require("prompt-sync")();

//Rode todo o código usando o comando "node Desafio5.js" no terminal

while (true) {

let n = Number(prompt("Digite a quantidade de termos: "));

let numero = "";
let soma = 0;
let serie = "";

for (let i = 1; i <= n; i++) {

    numero += "1";           
    soma += Number(numero);  

    serie += numero;

    if (i < n) {
        serie += " + ";
    }
}

console.log(serie);
console.log("A soma é:", soma);

}
