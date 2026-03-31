const precoGasolina = 6.69
const precoEtanol = 4.30
const precoDiesel = 6.03

const precoReal = 1.00
const precoDolar = 5.30
const precoEuro = 6.20

const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value;
    let tipomoeda = document.getElementById("dinheiro").value;

    let precoPorLitro;

    if (tipo == 'gasolina') precoPorLitro = precoGasolina;
    else if (tipo == 'etanol') precoPorLitro = precoEtanol;
    else if (tipo == 'diesel') precoPorLitro = precoDiesel;
    else {
        console.log("Escolha um combustível");
        return;
    }


    if (tipomoeda == 'dolar') precoPorLitro = precoPorLitro / precoDolar;
    else if (tipomoeda == 'euro') precoPorLitro = precoPorLitro / precoEuro;


    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros, tipomoeda);
};

let tipoCobustivel = document.getElementById("combustivel")
tipoCobustivel.addEventListener("change", atualizarValor)

const calcularValorAbastecimento = (precoCombustivel, litros, tipodamoeda) => {
    //let valorTotal = precoCombustivel * litros;
    //docu.getElementById("resultado").textContent = valorTotal

    if (litros <= 0 || isNaN(litros)) {
        document.getElementById("resultado").textContent = "Insira um valor valido"
        return;
    } else {
        if (tipodamoeda == 'real') {
            let valorTotal = precoCombustivel * litros;
            document.getElementById("resultado").textContent = `R$: ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
        else if (tipodamoeda == 'dolar') {
            let valorTotal = precoCombustivel * litros;
            document.getElementById("resultado").textContent = `US$: ${valorTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
        else if (tipodamoeda == 'euro') {
            let valorTotal = precoCombustivel * litros;
            document.getElementById("resultado").textContent = `€: ${valorTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
    }


}





let litros = document.getElementById("litros")
litros.addEventListener("input", atualizarValor)

const anonima = () => {

    litros.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            atualizarValor();
        }
    })

}






















