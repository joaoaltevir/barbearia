const express = require("express");
const router = express.router();
const servicoController = require("../controllers/servico");

router.post("/", (req, res) => {
    const servico = req.body
    const code = servicoController.store(servico)
    res.status(code).json()
})
router.get("/",(req, res)=> {
   res.json(servicoController.index());
})
router.get("/:id", (req, res)=>{
   const code = servicoController.show(req.params.id);
   res.status(code).json();
})
router.put("/:id", (req, res) =>{
   const servico = req.body;
   const code = servicoController.update(servico, req.params.id);
   res.status(code).json();
})
router.delete("/:id", (req,res)=>{
   const code = servicoController.destroy(req.params.id);
   res.status(code).json();
})