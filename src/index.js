const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

//GERENCIAMENTO DE USUARIOS

app.post("/usuario", (req, res) => {
    const usuario = req.body;
    const code = usuarioController.store(usuario);
    res.status(code).json();
})
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
