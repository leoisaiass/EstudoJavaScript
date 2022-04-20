function bemvindo() {
  // Janela de alerta criada em JavaScript
  alert("Olá, seja bem vindo!");
}

function nome() {
  // Vamos solicitar ao usuário que entre com o seu nome, utilizaremos o prompt associado a uma variável
  var nome = "";
  nome = prompt("Digite o seu nome: ");
  alert(nome.toUpperCase()); //Nome em letras maiúsculas
}

/*function operacoes() {
  //Calcular as 5 operações aritméticas
  var numero1 = prompt("Digite um número: ");
  var numero2 = prompt("Digite outro número: ");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  document.getElementsByTagName("div")[2].innerHTML =
    "<br> Os resultados são: <br><br>" +
    "Soma: " +
    soma +
    "<br>Subtração: " +
    subtrair +
    "<br>Multiplicação: " +
    multiplicar +
    "<br>Divisão: " +
    dividir +
    "<br>Resto: " +
    resto;
}*/

function operacoesComDiv() {
  var numero1 = prompt("Digite um número: ");
  var numero2 = prompt("Digite outro número: ");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  for (var i = 0; i <= 2; i++) {
    document.getElementsByTagName("div")[i].innerHTML =
      "<br> Os resultados são: <br><br>" +
      "Soma: " +
      soma +
      "<br>Subtração: " +
      subtrair +
      "<br>Multiplicação: " +
      multiplicar +
      "<br>Divisão: " +
      dividir +
      "<br>Resto: " +
      resto;
    document.getElementsByTagName("div")[i].style.padding = "30px";
    document.getElementsByTagName("div")[i].style.backgroundColor =
      "rgb(" + 100 * i + ", 200, 100)";
    document.getElementsByTagName("div")[i].style.margin = "30px";
  }
}

function tamanhoDiv() {
  document.getElementsByTagName("div")[0].style.width = "50%";
  document.getElementsByTagName("div")[0].style.transition = "ease 0.5s";
}

function tamanhoNormalDiv() {
  document.getElementsByTagName("div")[0].style.width = "100%";
}
