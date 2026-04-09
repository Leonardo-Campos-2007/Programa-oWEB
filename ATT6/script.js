const pessoa = {

    nome: "Leonardo",
    idade: 10

};

console.log(pessoa)
console.log(pessoa.nome);

const veiculo = {}
veiculo.marca = "Ford"
veiculo.ano = "1970"
console.log(veiculo)

class Veiculo2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;

    }
}



const c1 = new Veiculo2("Opala", 1970);
const c2 = new Veiculo2("Doje Ram", 2026);

console.log(c1)
console.log(c2.marca)

class ContaBancaria {
    #saldo = 0;
    constructor(saldoInicial){
        this.#saldo = saldoInicial
    }

    getSaldo(){
        return this.#saldo
    }


}


const conta = new ContaBancaria(100);
console.log(conta.getSaldo())

const pessoa2 = ["Leonardo", "caze", "Bressan", "Ferreira"];

console.log(pessoa2)

pessoa2.push("Asaph");
console.log(pessoa2)

pessoa2.unshift("Os mlk: ");
console.log(pessoa2)

pessoa2.splice(0,0, "Estes são")
console.log(pessoa2)

pessoa2.pop();
console.log(pessoa2)

pessoa2.shift()
console.log(pessoa2)

pessoa2.splice(0,1)
console.log(pessoa2)

pessoa2[0] = "Os mlk"
console.log(pessoa2)