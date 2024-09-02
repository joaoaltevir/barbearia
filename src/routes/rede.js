const express = require("express");
const router = express.Router();
const redeController = require("../controllers/rede.js");

router.post("/", (req, res) => {
    const rede = req.body
    const code = redeController.store(rede)
    res.status(code).json()
})
router.get("/",(req, res)=> {
   res.json(redeController.index());
})
router.get("/:id", (req, res)=>{
   const code = redeController.show(req.params.id);
   res.status(code).json();
})
router.put("/:id", (req, res) =>{
   const rede = req.body;
   const code = redeController.update(rede, req.params.id);
   res.status(code).json();
})
router.delete("/:id", (req,res)=>{
   const code = redeController.destroy(req.params.id);
   res.status(code).json();
})