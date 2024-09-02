const express = require("express");
const router = express.Router();
const usuarioController = require('../controllers/usuario.js')

router.post("/", (req, res) => {
    const usuario = req.body;
    const code = usuarioController.store(usuario);
    res.status(code).json();
});
router.get("/",(req, res)=> {
    res.json(usuarioController.index());
})
router.get("/:id", (req, res)=>{
    const code = usuarioController.show(req.params.id);
    res.status(code).json();
})
router.put("/:id", (req, res) =>{
    const usuario = req.body;
    const code = usuarioController.update(usuario, req.params.id);
    res.status(code).json();
})
router.delete("/:id", (req,res)=>{
    const code = usuarioController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router