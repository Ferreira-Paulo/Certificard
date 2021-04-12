function limpaMostrar(){
  document.getElementById('mostrarTemperaturas').innerHTML = ''
  document.getElementById('mostrarDistancias').innerHTML = ''
  document.getElementById('mostrarMoedas').innerHTML = ''
  document.getElementById("body").style.background = ''
}

function mostrarMoedas() {
  limpaMostrar()
  document.getElementById('body').style.background = 'url("https://images.unsplash.com/photo-1582281171754-405cb2a75fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
  var mostrarMoeda = document.getElementById("mostrarMoedas")
  var html = `<div class="alert alert-warning">
  <strong>ATENÇÃO!</strong> Os valores mostrados para conversão de moedas são fictícios. Projeto feito com intenção de estudo em logica de programação.
</div>
<div id="mostrarMoedas">
  <label class="tipo">
  <img src="../../img/icons8-macos-close-30.png" onclick="limpaMostrar()">
  De:
  </label>
  <p class="selecionar" id="moeda" style="display: none"></p>
  <container class="primeiro_valor">
    <div>
      <select class="tipo_de">
        <option id="option" value="usd">USD</option>
        <option id="option" value="eur">EUR</option>
        <option id="option" value="brl">BRL</option>
      </select>
    </div>
    <div>
      <input type="number" id="valor_converter" placeholder="00,00">
    </div>
  </container> 
  <label class="tipo">para:</label>
  <container class="segundo_valor">
    <div>
      <select class="tipo_para">
        <option value="brl">BRL</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
    </div>
    <div>
      <p id="valor_para">00,00</p>
    </div>
  </container> 
</div>`

  mostrarMoeda.innerHTML = html
  document.getElementById("btn").addEventListener("click", selection)
}

function mostrarTemperaturas() {
  limpaMostrar()
  document.getElementById('body').style.background = 'url("https://images.unsplash.com/photo-1580917922805-f8f57e08c0ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
  var mostrarTemperatura = document.getElementById("mostrarTemperaturas")
  var html = `<div id="mostrarTemperaturas">
  <label class="tipo">
  <img src="../../img/icons8-macos-close-30.png" onclick="limpaMostrar()">
  De:
  </label>
  <p class="selecionar" id="temperatura" style="display: none"></p>
  <container class="primeiro_valor">
    <div>
      <select class="tipo_de">
        <option value="K">Kelvin</option>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
    <div>
      <input type="number" id="valor_converter" placeholder="00,00">
    </div>
  </container> 
  <label class="tipo">para:</label>
  <container class="segundo_valor">
    <div>
      <select class="tipo_para">
        <option value="C">Celsius</option>
        <option value="K">Kelvin</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
    <div>
      <p id="valor_para">00,00</p>
    </div>
  </container> 
</div>`

  mostrarTemperatura.innerHTML = html
  document.getElementById("btn").addEventListener("click", selection)
}

function mostrarDistancias() {
  limpaMostrar()
  document.getElementById('body').style.background = 'url("https://images.unsplash.com/photo-1585511426526-a21c74efa642?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
  var mostrarDistancia = document.getElementById("mostrarDistancias")
  var html = `<div id="mostrarDistancias">
  <label class="tipo">
  <img src="../../img/icons8-macos-close-30.png" onclick="limpaMostrar()">
  De:
  </label>
  <p class="selecionar" id="distancia" style="display: none"></p>
  <container class="primeiro_valor">
    <div>
      <select class="tipo_de">
        <option value="KM">Quilometros</option>
        <option value="M">Metros</option>
        <option value="C">Centimetros</option>
      </select>
    </div>
    <div>
      <input type="number" id="valor_converter" placeholder="00,00">
    </div>
  </container> 
  <label class="tipo">para:</label>
  <container class="segundo_valor">
    <div>
      <select class="tipo_para">
        <option value="M">Metros</option>
        <option value="KM">Quilometros</option>
        <option value="C">Centimetros</option>
      </select>
    </div>
    <div>
      <p id="valor_para">00,00</p>
    </div>
  </container> 
</div>`

  mostrarDistancia.innerHTML = html
  document.getElementById("btn").addEventListener("click", selection)
}

function currencyConverter(t) {
    // Declação do tipo de moeda que irá ser convertida
    var currencyTypeFrom = document.querySelector('.tipo_de').value;
    // Declaração do valor que irá ser convertido
    var currencyValueFrom = Number(document.querySelector('#valor_converter').value);
    // Declaração do tipo de moeda desejada para conversão
    var currencyTypeTo = document.querySelector('.tipo_para').value;
    
    if(t == "moeda") {
      // Declação do tipo de moeda que irá ser convertida
      var currencyTypeFrom = document.querySelector('.tipo_de').value;
      // Declaração do valor que irá ser convertido
      var currencyValueFrom = Number(document.querySelector('#valor_converter').value);
      // Declaração do tipo de moeda desejada para conversão
      var currencyTypeTo = document.querySelector('.tipo_para').value;
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
    } else if(t == "temperatura") {
       var teste = document.querySelectorAll('#option').value = ''
      // Declação do tipo de temperatura que irá ser convertida
      var currencyTypeFrom = document.querySelector('.tipo_de').value;
      // Declaração do valor que irá ser convertido
      var currencyValueFrom = Number(document.querySelector('#valor_converter').value);
      // Declaração do tipo de moeda desejada para conversão
      var currencyTypeTo = document.querySelector('.tipo_para').value;
      // Cálculo da conversão baseado na escolha do tipo de moeda
      if (currencyTypeFrom == "K") {
        if (currencyTypeTo == "C") {
          convertedCurrency = currencyValueFrom - 273.15;
        }
        else if (currencyTypeTo == "F") {
          convertedCurrency = ((currencyValueFrom - 273.15) * 1.8) +32;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      else if (currencyTypeFrom == "C") {
        if (currencyTypeTo == "K") {
          convertedCurrency = currencyValueFrom + 273.15;
        }
        else if (currencyTypeTo == "F") {
          convertedCurrency = (currencyValueFrom * 1.8) + 32;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      else {
        if (currencyTypeTo == "K") {
          convertedCurrency = ((currencyValueFrom - 32) / 1.8) + 273.15;
        }
        else if (currencyTypeTo == "C") {
          convertedCurrency = (currencyValueFrom - 32) / 1.8;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      // Impressão do resultado da conversão para o usuário
      document.querySelector('#valor_para').innerHTML = convertedCurrency.toFixed(2);
    } else if(t == "distancia") {
      // Declação do tipo de moeda que irá ser convertida
      var currencyTypeFrom = document.querySelector('.tipo_de').value;
      // Declaração do valor que irá ser convertido
      var currencyValueFrom = Number(document.querySelector('#valor_converter').value);
      // Declaração do tipo de moeda desejada para conversão
      var currencyTypeTo = document.querySelector('.tipo_para').value;
      // Cálculo da conversão baseado na escolha do tipo de moeda
      if (currencyTypeFrom == "KM") {
        if (currencyTypeTo == "M") {
          convertedCurrency = currencyValueFrom * 1000;
        }
        else if (currencyTypeTo == "C") {
          convertedCurrency = currencyValueFrom * 100000;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      else if (currencyTypeFrom == "M") {
        if (currencyTypeTo == "KM") {
          convertedCurrency = currencyValueFrom / 1000;
        }
        else if (currencyTypeTo == "C") {
          convertedCurrency = currencyValueFrom * 100;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      else {
        if (currencyTypeTo == "KM") {
          convertedCurrency = currencyValueFrom / 100000;
          console.log(convertedCurrency)
        }
        else if (currencyTypeTo == "M") {
          convertedCurrency = currencyValueFrom / 100;
        }
        else {
          convertedCurrency = currencyValueFrom;
        }
      }
      // Impressão do resultado da conversão para o usuário
      document.querySelector('#valor_para').innerHTML = convertedCurrency;
    } 
};

function funcaoConverter(e) {
  console.log
  // Declaração da variável "valor convertido"
  var convertedCurrency = 0;
  // Impressão do resultado da conversão para o usuário
  document.querySelector('#valor_para').innerHTML = convertedCurrency.toFixed(2);
  // Declaração do botão Converter
  const converterBotton = document.querySelector('.btn');
  // Ativação da função Converter Moeda por meio do clique no botão
  converterBotton.onclick = currencyConverter(e);
}

function selection() {
  var select = document.querySelector(".selecionar")

  funcaoConverter(select.id)
}

function temperatura() {
  console.log("olha a temperatura")
  funcaoConverter('temperatura')
}

function distancia() {
  console.log("olha a distancia")
  funcaoConverter('distancia')
}