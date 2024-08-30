const express = require('express');
const redeRouter = require("./routes/rede.js");
const clienteRouter = require("./routes/cliente.js");
const barbeariaRouter = require("./routes/barbearia.js");
const usuarioRouter = require("./routes/usuario.js");
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

app.post("/barbeiro", (req, res) => {
    const barbeiro = req.body
    const code = barbeiroController.store(barbeiro)
    res.status(code).json()
})
app.get("/barbeiro",(req, res)=> {
   res.json(barbeiroController.index());
})
app.get("/barbeiro/:id", (req, res)=>{
   const code = barbeiroController.show(req.params.id);
   res.status(code).json();
})
app.put("barbeiro/:id", (req, res) =>{
   const barbeiro = req.body;
   const code = barbeiroController.update(barbeiro, req.params.id);
   res.status(code).json();
})
app.delete("barbeiro/:id", (req,res)=>{
   const code = barbeiroController.destroy(req.params.id);
   res.status(code).json();
})


//GERENCIMANENTO DE SERVIÇO

app.post("/servico", (req, res) => {
    const servico = req.body
    const code = servicoController.store(servico)
    res.status(code).json()
})
app.get("/servico",(req, res)=> {
   res.json(servicoController.index());
})
app.get("/servico/:id", (req, res)=>{
   const code = servicoController.show(req.params.id);
   res.status(code).json();
})
app.put("servico/:id", (req, res) =>{
   const servico = req.body;
   const code = servicoController.update(servico, req.params.id);
   res.status(code).json();
})
app.delete("servico/:id", (req,res)=>{
   const code = servicoController.destroy(req.params.id);
   res.status(code).json();
})

app.listen(port, () => {
    console.log(`server running in ${port} port`)
})





