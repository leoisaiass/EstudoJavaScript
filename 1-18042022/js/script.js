// Janela de alerta criada em JavaScript
// alert("Olá, seja bem vindo!");

// Vamos solicitar ao usuário que entre com o seu nome, utilizaremos o prompt associado a uma variável
// var nome = "";
// nome = prompt("Digite o seu nome: ");
// alert(nome.toUpperCase()); //Nome em letras maiúsculas

//Calcular as 5 operações aritméticas
var numero1 = prompt("Digite um número: ");
var numero2 = prompt("Digite outro número: ");

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
  "Os resultados são: \n\n" +
    "Soma: " +
    soma +
    "\nSubtração: " +
    subtrair +
    "\nMultiplicação: " +
    multiplicar +
    "\nDivisão: " +
    dividir +
    "\nResto: " +
    resto
);
