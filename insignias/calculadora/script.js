// Declaração da variável limpar tela, inicialmente falso
var cleanScreen = false;
// Declaração da variável responsável por não repetir operadores
var operator = false;
// Declaração da variável responsável por não repetir pontos
var point = false;
// Declaração da variável responsável por não colcocar operadores e ponto no início da expressão
var firstParameter = true;
// Declaração da funçaõ responsável por adicionar elementos na estrutura de operação
function addParameter(number) {
  // condição responsável por verificar se já houve uma operação anteriormente para limpar a tela
  if (cleanScreen == true && number != '/' && number != '*' && number != '+' && number != '-' && number != '.') {
    ac();
    cleanScreen = false;
  }
  // Condição responsável por verificar se foi selecionado operadores
  if (number == '/' || number == '*' || number == '+' || number == '-') {
    // Condição responsável por não haver repetição de operadores nem escrevê-los no início da expressão
    if (operator == false && firstParameter == false) {
      document.querySelector('.result').value = document.querySelector('.result').value + number;
      operator = true;
      point = false;
      cleanScreen = false;
    }
    else if (operator == true || firstParameter == true) {
      document.querySelector('.result').value = document.querySelector('.result').value;
    }
  }
  // Condição responsável por não haver repetição de operadores nem escrevê-los no início da expressão
  if (operator == true) {
    document.querySelector('.result').value = document.querySelector('.result').value
  }
  // Condição responsável por não haver repetição de pontos nem escrevê-los no início da expressão
  if (number == '.') {
    if (point == false && firstParameter == false) {
      document.querySelector('.result').value = document.querySelector('.result').value + number;
      point = true;
    }
    else {
      document.querySelector('.result').value = document.querySelector('.result').value;
    }
  }
  // Condição responsável por adicionar números na expressão
  if (number != '/' && number != '*' && number != '+' && number != '-' && number != '.') {
    // responsável por montar a estrutura de operação de acordo com o valor do botão clicado
    document.querySelector('.result').value = document.querySelector('.result').value + number;
    firstParameter = false;
  }
}
// Declaração da função que executa a operação já escrita
function addEqual() {
  var content = document.querySelector('.result').value;
  // Se há conteúdo a função 'eval' executa a operação baseada nos números e no operador escolhido
  if (content) {
    document.querySelector('.result').value = eval(content);
  }
  // Atribui verdadeira a situação de operação executada para posteriormente limpar-se a tela
  cleanScreen = true;
  // Permite que operadores sejam utilizados novamente
  operator = false;
  // Permite que pontos sejam utilizados novamente
  point = false;
}
// Declaração da função responsável por limpar a tela
function ac() {
  // limpa a expressão digitada na tela e zera a calculadora
  document.querySelector('.result').value = "";
  operator = false;
  point = false;
  firstParameter = true;
}
// Declaração da função apagar conteúdo
function apagar() {
  var content = document.querySelector('.result').value;
  // recebe o conteúdo da input e retira 1 caractere do seu comprimento
  document.querySelector('.result').value = content.substring(0, content.length-1);
}