// Importação do módulo do servidor express
const express = require("express");

// Criação do aplicativo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// Vamos criar a primeira rota do servidor
// Esta será a rota raiz
app.get("/", (req, res) => {
  res.send("Olá! Seja bem vindo. Você está na rota raiz");
});
// req = quando o usuário os dados
// res = servidor respondendo para o usuário

// Definir uma porta de comunicação com o servidor de aplicaçãoc
app.listen(5000, () => console.log("On line em http://localhost:5000"));
