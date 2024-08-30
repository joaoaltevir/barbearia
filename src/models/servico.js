let nextID = 1
const barbeiroController = require('../controllers/barbeiro.js')
const model = (body, id = nextID++) => {
    if(
        body.nome != "" &&
        body.nome != undefined &&
        body.preco != undefined &&
        body.preco != "" &&
        body.duracaoMinutos != undefined &&
        body.duracaoMinutos != "" &&
        barbeiroController.show(body.idBarbeiro)
    ){
        return {
            id,
            nome: body.nome,
            bio: body.bio,
            foto: body.foto,
            idBarbeiro: body.idBarbeiro
        }
    }
}

module.exports = model