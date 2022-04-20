function repeticao1() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function galeria() {
  const miniatura = document.getElementById("miniatura");
  const painel = document.getElementById("painel");

  for (var i = 1; i <= 5; i++) {
    miniatura.innerHTML += "<img src=img/moeda" + i + ".jpg id=moeda" + i + ">";
  }
  abrirNoPainel();
}

function abrirNoPainel() {
  document.getElementById("moeda1").onclick = function () {
    painel.innerHTML = "<img scr=img/moeda1.jpg>";
  };
  document.getElementById("moeda2").onclick = function () {
    painel.innerHTML = "<img scr=img/moeda2.jpg>";
  };
  document.getElementById("moeda3").onclick = function () {
    painel.innerHTML = "<img scr=img/moeda3.jpg>";
  };
  document.getElementById("moeda4").onclick = function () {
    painel.innerHTML = "<img scr=img/moeda4.jpg>";
  };
  document.getElementById("moeda5").onclick = function () {
    painel.innerHTML = "<img scr=img/moeda5.jpg>";
  };
}
