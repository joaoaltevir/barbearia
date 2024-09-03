const express = require("express");
const router = express.router();
const barbeiroController = require('../controllers/barbeiro')

router.post("/", (req, res) => {
    const barbeiro = req.body
    const code = barbeiroController.store(barbeiro)
    res.status(code).json()
})
router.get("/",(req, res)=> {
   res.json(barbeiroController.index());
})
router.get("/:id", (req, res)=>{
   const code = barbeiroController.show(req.params.id);
   res.status(code).json();
})
router.put("/:id", (req, res) =>{
   const barbeiro = req.body;
   const code = barbeiroController.update(barbeiro, req.params.id);
   res.status(code).json();
})
router.delete("/:id", (req,res)=>{
   const code = barbeiroController.destroy(req.params.id);
   res.status(code).json();
})