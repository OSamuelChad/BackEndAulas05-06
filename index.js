const express = require("express");
const app = express();
const rotaProdutos = require("./rotas/produtos.rotas");
//const { v4: uuidv4 } = require('uuid');




app.use(express.json());
app.use("/produto", rotaProdutos);

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080");
});
