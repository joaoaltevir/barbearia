const express = require('express');
const cepEndereco = require("./middlewares/cep_endereco.js")
const redeController = require("./controllers/rede.js");
const clienteController = require("./controllers/cliente.js");
const barbeariaController = require("./controllers/barbearia.js");
const usuarioController = require("./controllers/usuario.js");
const app = express();
const port = 3000

app.use(express.json());

//GERENCIAMENTO DE USUARIOS

app.post("/usuario", (req, res) => {
    const usuario = req.body;
    const code = usuarioController.store(usuario);
    res.status(code).json();
});
app.get("/usuario",(req, res)=> {
    res.json(usuarioController.index());
})
app.get("/usuario/:id", (req, res)=>{
    const code = usuarioController.show(req.params.id);
    res.status(code).json();
})
app.put("usuario/:id", (req, res) =>{
    const usuario = req.body;
    const code = usuarioController.update(usuario, req.params.id);
    res.status(code).json();
})
app.delete("usuario/:id", (req,res)=>{
    const code = usuarioController.destroy(req.params.id);
    res.status(code).json();
})

//GERENCIAMENTO DE CLIENTE

app.post("/cliente", (req, res) => {
    const cliente = req.body;
    const code = clienteController.store(cliente);
    res.status(code).json();
})
app.get("/cliente",(req, res)=> {
    res.json(clienteController.index());
})
app.get("/cliente/:id", (req, res)=>{
    const code = clienteController.show(req.params.id);
    res.status(code).json();
})
app.put("cliente/:id", (req, res) =>{
    const cliente = req.body;
    const code = clienteController.update(cliente, req.params.id);
    res.status(code).json();
})
app.delete("cliente/:id", (req,res)=>{
    const code = clienteController.destroy(req.params.id);
    res.status(code).json();
})

//GERENCIAMENTO DE BARBEARIA

app.post("/barbearia", cepEndereco, (req, res) => {
     const barbearia = req.body
     const code = barbeariaController.store(barbearia)
     res.status(code).json();
})
app.get("/barbearia",(req, res)=> {
    res.json(barbeariaController.index());
})
app.get("/barbearia/:id", (req, res)=>{
    const code = barbeariaController.show(req.params.id);
    res.status(code).json();
})
app.put("barbearia/:id", cepEndereco, (req, res) =>{
    const barbearia = req.body;
    const code = barbeariaController.update(barbearia, req.params.id);
    res.status(code).json();
})
app.delete("barbearia/:id", (req,res)=>{
    const code = barbeariaController.destroy(req.params.id);
    res.status(code).json();
})

//GERENCIAMENTO DE REDES

app.post("/rede", (req, res) => {
    const rede = req.body
    const code = redeController.store(rede)
    res.status(code).json()
})
app.get("/rede",(req, res)=> {
   res.json(redeController.index());
})
app.get("/rede/:id", (req, res)=>{
   const code = redeController.show(req.params.id);
   res.status(code).json();
})
app.put("rede/:id", (req, res) =>{
   const rede = req.body;
   const code = redeController.update(rede, req.params.id);
   res.status(code).json();
})
app.delete("rede/:id", (req,res)=>{
   const code = redeController.destroy(req.params.id);
   res.status(code).json();
})

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





