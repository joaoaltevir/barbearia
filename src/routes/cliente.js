const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.js")

router.post("/", (req, res) => {
    const cliente = req.body;
    const code = clienteController.store(cliente);
    res.status(code).json();
})
router.get("/",(req, res)=> {
    res.json(clienteController.index());
})
router.get("/:id", (req, res)=>{
    const code = clienteController.show(req.params.id);
    res.status(code).json();
})
router.put("/:id", (req, res) =>{
    const cliente = req.body;
    const code = clienteController.update(cliente, req.params.id);
    res.status(code).json();
})
router.delete("/:id", (req,res)=>{
    const code = clienteController.destroy(req.params.id);
    res.status(code).json();
})