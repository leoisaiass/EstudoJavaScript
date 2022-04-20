//Script para realizar as 4 operações matemáticas

function operações() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  //verificar se as caixas estão vazias
  if (n1.value == "" || n2.value == "") {
    return alert("As caixas não podem ficar vazias");
  }
}
const btnSoma = document.getElementById("btnSoma");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

//Somar os valores das caixas
btnSoma.onclick = function () {
  alert(parseInt(n1.value) + parseInt(n2.value));
};
//Subtrair os valores das caixas
btnSubtrair.onclick = function () {
  alert(n1.value - n2.value);
};
//Multiplicar os valores das caixas
btnMultiplicar.onclick = function () {
  alert(n1.value * n2.value);
};
//Dividir os valores das caixas
btnDividir.onclick = function () {
  alert(n1.value / n2.value);
};
