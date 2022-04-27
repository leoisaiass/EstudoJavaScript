/*Função anônima é uma função que não tem nome. Ela é atribuída a um elemento 
de evento ou a uma variável. Os elementos de evento podem ser: 
botões, inputs, imagens e vários outros controles html*/

const body = document.body;

// Vamos criar um botão para adicionar a página
const btn1 = document.createElement("button");
btn1.innerHTML = "Primeira função"; //Nome

// Adicionar o btn1 a página html. Adição feita ao body
body.appendChild(btn1);

// Aplicar uma função ao botão btn1 // Evento sempre chama uma função
btn1.onclick = function () {
  // Capturar a url da página
  var url = window.location;
  window.document.title = "Trocou o título";
  alert("Trocou o título da página" + url);
};

// Criar um novo botão btn2
const btn2 = document.createElement("button");
btn2.innerHTML = "Segunda função";

// Adicionar btn2 ao body
body.appendChild(btn2);

// Seta é indicado por: =>
btn2.onclick = () => {
  document.body.style.backgroundColor = "yellow";
};

// Vamos criar uma matriz com produtos
const produtos = [
  ["Produto", "Quantidade", "Preço"],
  ["Calça", "15", "R$150,00"],
  ["Blusa", "35", "R$35,00"],
  ["Tênis", "10", "R$200,00"],
];

function montarTabela() {
  const div = document.createElement("div");
  var tabela = "<table>";

  for (var linha = 0; linha <= 3; linha++) {
    tabela += "<tr>";
    for (var coluna = 0; coluna <= 2; coluna++) {
      if (linha == 0) {
        tabela += `<th>${produtos[linha][coluna]}</th>`; // Cabeçário = "td"
      } else {
        tabela += `<td>${produtos[linha][coluna]}</td>`; // Outros dados = "th"
      }
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  div.innerHTML = tabela;
  body.appendChild(div);
}

const btn3 = document.createElement("button");
btn3.innerHTML = "Terceira função";
body.appendChild(btn3);
btn3.onclick = montarTabela;

const btn4 = document.createElement("button");
btn4.innerHTML = "Quarta função";
body.appendChild(btn4);
btn4.onclick = () => {
  /* Vamos usar um iterador (aquele que intera, junta, lê os elementos),
    chamado "forEach" (para cada), ele estará presente no Array */
  produtos.forEach(function (produto, index) {
    console.log(`Item da linha ${index} -> ${produto}`);
  });
};

const btn5 = document.createElement("button");
btn5.innerHTML = "Quinta função";
body.appendChild(btn5);
btn5.onclick = () => {
  produtos.forEach((produto, index) => {
    produto.forEach((item, ix) => {
      console.log(`Linha ${index} e coluna ${ix} -> ${item}`);
    });
  });
};
