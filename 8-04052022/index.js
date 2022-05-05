/* !!!PROJETO DE BANCO DE DADOS PARA PRODUTOS!!! */

//  Impoortação dos módulos
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Criação do aplicativo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// "Cors" permite aceitar acesso por protocolos diferentes, tais como:
// HTTP;
// HTTPS;
// FILE;
// FTP;
// SMB e outros.
app.use(cors());

const urldb =
  "mongodb+srv://leoisaias135:Leo23042004@projeto-backend.dlini.mongodb.net/BancoDeDados?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const tabela = mongoose.Schema({
  nome: String,
  descricao: String,
  categoria: String,
  quantidade: Number,
  preco: Number,
  foto: String,
});

const produto = mongoose.model("tbproduto", tabela);

// Rota padrão para API
const rota = "/api/produto";

app.get(`${rota}/listar`, (req, res) => {
  produto.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar produtos -> ${erro}` });
    res.status(200).send({ output: dados });
  });
});

app.post(`${rota}/cadastrar/`, (req, res) => {
  const pro = new produto(req.body);
  pro
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Produto cadastrado`, info: dados });
    })
    .catch((error) =>
      res.status(500).send({ output: `Erro ao cadastrar-> ${erro}` })
    );
});

app.put(`${rota}/atualizar/:id`, (req, res) => {
  produto.findByIdAndUpdate(
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

app.delete(`${rota}/apagar/:id`, (req, res) => {
  produto.findIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(500).send({ output: `Erro ao apagar -> ${erro}` });
    res.status(204).send({ output: "Apagou" });
  });
});

app.listen(5000, () => console.log("on line em http://localhost5000"));
