const precoGasolina = 6.69
const precoEtanol = 4.30
const precoDiesel = 6.03

function atualizarValor() {
    let tipo = document.getElementById("combustivel").value
    console.log(tipo)

    let precoPorLitro
    switch (tipo) {

        case 'gasolina':
            precoPorLitro = precoGasolina;
            break;

        case 'etanol':
            precoPorLitro = precoEtanol
            break;

        case 'diesel':
            precoPorLitro = precoDiesel
            break;

        default:
            console.log("ESCOLHA UMA OPÇÃO")
            return;

    }

    console.log(precoPorLitro);
    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros)
}

let tipoCobustivel = document.getElementById("combustivel")
tipoCobustivel.addEventListener("change", atualizarValor)

function calcularValorAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
   //docu.getElementById("resultado").textContent = valorTotal

   if(litros <= 0 || isNaN(litros) ){
    document.getElementById("resultado").textContent = "Insira um valor valido"
    return;
   }else{
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = `R$: ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
   }

 
   

   
}
let litros = document.getElementById("litros")
   litros.addEventListener("input", atualizarValor)
   
   litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        atualizarValor();
    }
   })





















