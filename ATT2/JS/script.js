console, console.log("Olá, Mundo");

// variaveis
var animal = 'gato';
console.log(animal);

let nomeCompleto = 'Leonardo'
console.log(nomeCompleto)

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = '15'; // var permite reatribuiçãos
//valor0 = 14; const não permite reatribuição

//verificação de tipos:
console.log(typeof valor1);

//algoritimo = entrada + processamento + saida

var nome = window.prompt("Nome: ")
console.log("Seja bem-vindo " + nome + " Aproveite!!");
console.log(`Seja bem-vindo ${nome}. Aproveite`); // templete literal
document.writeln(`Seja bem vindo ${nome} . Aproveite`)

// operadores aritmeticos
//(2 + 4) * 2

// operadores de comparação < > <= >= == != === !==
console.log(5 == '5');
console.log(5 === '5');

var num1 = window.prompt('Numero 1 : ');
var num2 = window.prompt('Numero 2 : ');
var resultado = Number(num1) + Number(num2);
document.writeln(`A soma dos numeros eh ${Number(resultado)}`)


//estruturas condicionais

var idade = 10;
if (idade >= 18){
  console.log("Maior de idade")
} else{
  console.log("Menor de idade")
}

var hora = 10;
if(hora < 12){
  console.log("Bom dia ");
}else if(jora < 18){
  console.log("Boa tarde");
}else{
  console.log("Boa noite");
}


var diaSemana = 3;
switch (diaSemana){

  case 1:
  console.log("domingo");
  break;

  case 2: 
  console.log("segunda-feira");
  break;

  default:
    console.log("Escolha uma opção valida")
}

for(let i=0; i=5; i++){
  console.log("interação: " + i);
}

i = 0;
while(i < 5){
  i++
  console.log("Numero = " + i);
}
