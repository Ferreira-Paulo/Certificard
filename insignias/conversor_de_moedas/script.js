window.onload = limpaMostrar
function limpaMostrar(){
  document.getElementById('mostrarMoedas').style.display = 'none'
  document.getElementById('mostrarTemperaturas').style.display = 'none'
  document.getElementById('mostrarDistancias').style.display = 'none'
}

function mostrarMoedas() {
  limpaMostrar()
  var mostrarMoeda = document.getElementById("mostrarMoedas")
  if (mostrarMoeda.style.display == "none") {
  mostrarMoeda.style.display = "block";
  } else {
  mostrarMoeda.style.display = "none";
  }
}

function mostrarTemperaturas() {
  limpaMostrar()
  var mostrarTemperatura = document.getElementById("mostrarTemperaturas")
  if (mostrarTemperatura.style.display === "none") {
    mostrarTemperatura.style.display = "block";
  } else {
    mostrarTemperatura.style.display = "none";
  }
  /*var primeiroValor = document.getElementById("primeiroValor")
  var html = "<div> Até que deu certo mostrar moedas</div>"

  primeiroValor.innerHTML = html*/
}

function mostrarDistancias() {
  limpaMostrar()
  var mostrarDistancia = document.getElementById("mostrarDistancias")
  if (mostrarDistancia.style.display === "none") {
    mostrarDistancia.style.display = "block";
  } else {
    mostrarDistancia.style.display = "none";
  }
  /*var primeiroValor = document.getElementById("primeiroValor")
  var html = "<div> Até que deu certo mostrar moedas</div>"

  primeiroValor.innerHTML = html*/
}




 /*Declaração da função Converter Moeda
function currencyConverter() {
  // Declação do tipo de moeda que irá ser convertida
  var currencyTypeFrom = document.querySelector('.tipo_mode_de').value;
  // Declaração do valor que irá ser convertido
  var currencyValueFrom = Number(document.querySelector('#currency-value-from').value);
  // Declaração do tipo de moeda desejada para conversão
  var currencyTypeTo = document.querySelector('.tipo_mode_de').value;
  // Cálculo da conversão baseado na escolha do tipo de moeda
  if (currencyTypeFrom == "brl") {
    if (currencyTypeTo == "usd") {
      convertedCurrency = currencyValueFrom / 5.51;
    }
    else if (currencyTypeTo == "eur") {
      convertedCurrency = currencyValueFrom / 6.58;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  else if (currencyTypeFrom == "usd") {
    if (currencyTypeTo == "brl") {
      convertedCurrency = currencyValueFrom * 5.51;
    }
    else if (currencyTypeTo == "eur") {
      convertedCurrency = currencyValueFrom / 1.19;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  else {
    if (currencyTypeTo == "brl") {
      convertedCurrency = currencyValueFrom * 6.58;
    }
    else if (currencyTypeTo == "usd") {
      convertedCurrency = currencyValueFrom * 1.19;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  // Impressão do resultado da conversão para o usuário
  document.querySelector('#valor_para').innerHTML = convertedCurrency.toFixed(2);
};
// Declaração da variável "valor convertido"
var convertedCurrency = 0;
// Impressão do resultado da conversão para o usuário
document.querySelector('#valor_para').innerHTML = convertedCurrency.toFixed(2);
// Declaração do botão Converter
const converterBotton = document.querySelector('button');
// Ativação da função Converter Moeda por meio do clique no botão
converterBotton.onclick = currencyConverter;
*/