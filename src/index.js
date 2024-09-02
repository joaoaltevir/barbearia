const express = require('express');
const redeRouter = require("./routes/rede.js");
const clienteRouter = require("./routes/cliente.js");
const barbeariaRouter = require("./routes/barbearia.js");
const usuarioRouter = require("./routes/usuario.js");
const barbeiroRouter = require("./routes/barbeiro.js");
const servicoRouter = require("./routes/servico.js");
const atendimentoRouter = require("./routes/atendimento.js");
const app = express();
const port = 3000

app.use(express.json());

//GERENCIAMENTO DE USUARIOS
app.use("/usuario", usuarioRouter);
//GERENCIAMENTO DE CLIENTE
app.use("/cliente", clienteRouter);
//GERENCIAMENTO DE BARBEARIA
app.use("/barbearia", barbeariaRouter);
//GERENCIAMENTO DE REDES
app.use("/rede", redeRouter);
//GERENCIAMENTO BARBEIRO
app.use("/barbeiro", barbeiroRouter);
//GERENCIMANENTO DE SERVIÇO
app.use("/servico", servicoRouter);
//GERENCIAMENTO ATENDIMENTO
app.use("/atendimento", atendimentoRouter);

app.listen(port, () => {
    console.log(`server running in ${port} port`)
})





