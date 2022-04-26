// Array --> conjunto de dados, sobre determinada informação
// Matriz -> Coleção de linhas e colunas
// Vetor -> Coleção de uma linha

function array1() {
  var nomes = ["Paulo", "Helena", "Vanessa"];
  // Length -> pega o tamanho do array
  for (var i = 0; i < nomes.length; i++);
  {
    // console.log(nomes[i]);
  }
  // Vamos adicionar um nome
  nomes.push("Guilherme");
  console.log(nomes);
  // Remover o último elemento do Array
  nomes.pop();
  console.log(nomes);
  // Remover o primeiro elemento do Array
  nomes.shift();
  console.log(nomes);
  // Adicionar o primeiro elemento do Array
  nomes.unshift("Wagner");
  nomes.push("Gabriela");
  console.log(nomes);
  // Vamos criar uma matriz, com nome e idade
  var dados = [
    ["Nome", "Idade"],
    ["Pedro", "15"],
    ["Marcos", "21"],
    ["Debora", "22"],
  ];
  console.log(dados);
}
