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

