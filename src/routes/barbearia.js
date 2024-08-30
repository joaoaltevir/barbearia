const express = require("express");
const router = express.Router();
const cepEndereco = require("../middlewares/cep_endereco.js");
const barbeariaController = require("../controllers/barbearia.js")

router.post("/", cepEndereco, (req, res) => {
    const barbearia = req.body
    const code = barbeariaController.store(barbearia)
    res.status(code).json();
})
router.get("/",(req, res)=> {
   res.json(barbeariaController.index());
})
router.get("/:id", (req, res)=>{
   const code = barbeariaController.show(req.params.id);
   res.status(code).json();
})
router.put("/:id", cepEndereco, (req, res) =>{
   const barbearia = req.body;
   const code = barbeariaController.update(barbearia, req.params.id);
   res.status(code).json();
})
router.delete("/:id", (req,res)=>{
   const code = barbeariaController.destroy(req.params.id);
   res.status(code).json();
})