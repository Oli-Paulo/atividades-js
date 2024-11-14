/*
// Solicita ao usuário o tipo de combustível do carro
let tipoCombustivelDoCarro = prompt("Informe o tipo do combustivel do carro (Gasolina ou Etanol): ");
tipoCombustivelDoCarro = tipoCombustivelDoCarro.toUpperCase();

// Solicita ao usuário o valor de quilômetros por litro do carro
let kmPorLitro = parseFloat(prompt("Informe quantos Km seu carro anda por litro: "));

// Solicita ao usuário a distância da viagem em quilômetros
let distanciaViagem = prompt("Informe a distância da sua viagem em Km: ");

// Declaração da variável para armazenar o valor gasto na viagem
let valorGasto;

// Verifica o tipo de combustível informado
if (tipoCombustivelDoCarro === "ETANOL") {
    let precoEtanol = parseFloat(prompt("Informe o preço do etanol: "));
    valorGasto = (distanciaViagem / kmPorLitro) * precoEtanol;
} else if (tipoCombustivelDoCarro === "GASOLINA") {
    let precoGasolina = parseFloat(prompt("Informe o preço da gasolina: "));
    valorGasto = (distanciaViagem / kmPorLitro) * precoGasolina;
} else {
    alert("Tipo de combustivel inválido!");
}

// Exibe o valor total gasto na viage
alert("O valor gasto na viagem é: " + valorGasto.toFixed(2));
*/

let precoProduto = parseFloat(prompt("Informe o preço do produto: "));
let condicaoPagamento = prompt("Qual é a condição de pagamento?(Debito, credito, pix ou dinheiro)");
condicaoPagamento = condicaoPagamento.toUpperCase();

let precoFinal;

if (condicaoPagamento === "DEBITO") {
    precoFinal = precoProduto - (precoProduto * 0.1);
    alert("O preço final do produto é: R$" + precoFinal.toFixed(2));
} else if (condicaoPagamento === "PIX" || condicaoPagamento === "DINHEIRO") {
    precoFinal = precoProduto - (precoProduto * 0.15);
    alert("O preço final do produto é: R$" + precoFinal.toFixed(2));
} else if (condicaoPagamento === "CREDITO") {
    let parcelas = parseInt(prompt("Em quantas vezes?(Até 2 vezes sem juros)"));
    if (parcelas === 0) {
        alert("Não é possível pagar com crédito.");
    } else if (parcelas <= 2){
        precoFinal = precoProduto / parcelas;
        alert("O preço final do produto é: R$" + precoFinal.toFixed(2) + " em " + parcelas + " vezes.");
    } else
}