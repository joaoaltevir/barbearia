const express = require("express");
const router = express.router();
const atendimentoController = require("../controllers/atendimento.js");

router.post("/", (req, res) => {
    const servico = req.body
    const code = atendimentoController.store(servico)
    res.status(code).json()
})
router.get("/",(req, res)=> {
   res.json(atendimentoController.index());
})
router.get("/:id", (req, res)=>{
   const code = atendimentoController.show(req.params.id);
   res.status(code).json();
})
router.put("/:id", (req, res) =>{
   const servico = req.body;
   const code = atendimentoController.update(servico, req.params.id);
   res.status(code).json();
})
router.delete("/:id", (req,res)=>{
   const code = atendimentoController.destroy(req.params.id);
   res.status(code).json();
})