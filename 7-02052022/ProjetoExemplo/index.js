// Importação do módulo do servidor express
const express = require("express");

// Importação do módulo do Mongoose
const mongoose = require("mongoose");
const urldb =
  "mongodb+srv://leoisaias135:Leo23042004@projeto-backend.dlini.mongodb.net/BancoDeDados?retryWrites=true&w=majority";

mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

// Criar a estrutura da tabela de clientes
const tabela = mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

// Criar o modelo de dados, ou seja, criar a tabela com a estrutura
const Cliente = mongoose.model("tbcliente", tabela);

// Criação do aplicativo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// URL de conexao com o banco de dados MongoDB
// mongodb+srv://leoisaias135:<password>@projeto-backend.dlini.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// Vamos criar a primeira rota do servidor
// Esta será a rota raiz
app.get("/", (req, res) => {
  /*Antigo ===> res.send("Olá! Seja bem vindo. Você está na rota raiz");*/

  // Vamos trazer todos os clientes cadastrados e exibir em tela
  Cliente.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar clientes -> ${erro}` });
    res.status(200).send({ output: dados });
  });
});
// req = quando o usuário insere os dados
// res = servidor respondendo para o usuário

/*// Definir uma porta de comunicação com o servidor de aplicaçãoc
app.listen(5000, () => console.log("On line em http://localhost:5000"));*/

// Vamos criar a rota com o verbo POST, é usado quando se deseja cadastrar algum dado ou para fazer sistema de login
app.post("/cadastro", (req, res) => {
  /*Antigo===> res.status(201).send({ output: `Dados cadastrados`, dados: req.body }); */

  // Vamos criar um novo cliente à partir dos dados enviados
  const cli = new Cliente(req.body);

  // Comando SAVE para gravar os dados no banco de dados
  cli
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cliente cadastrado`, info: dados });
    })
    .catch((error) =>
      res.status(500).send({ output: `Erro ao cadastrar-> ${erro}` })
    );
});

//  Rota para atualizar os dados dos clientes. Vamos usar o verbo PUT.
// Para atualizar precisaremos de 2 informações: 1- é o "id" do dado que deseja atualizar
// 2- são os dados que deseja atualizar
app.put("/atualizar/:id", (req, res) => {
  /*Antigo ===> res
    .status(200)
    .send({ output: `Atualizado`, Id: req.params.id, Dados: req.body });*/

  Cliente.findByIdAndUpdate(
    req.params.id,
    res.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `Erro ao atualizar -> ${erro}` });
      res.status(200).send({ output: `Atualizado`, info: dados });
    }
  );
});

// Para deletar um dado utilizaremos o verbo de DELETE passando ID
app.delete("/delete/:id", (req, res) => {
  res.status(204).send({ output: `Apagou` });
});

// Definir uma porta de comunicação com o servidor
app.listen(5000, () => console.log("on line em http://localhost5000"));
