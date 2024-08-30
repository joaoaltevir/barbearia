let nextID = 1
const barbeariaController = require('../controllers/barbearia.js')
const model = (body, id = nextID++) => {
    if(
        body.nome != "" &&
        body.nome != undefined &&
        body.foto != undefined &&
        body.foto != "" &&
        body.bio != undefined &&
        body.bio != "" &&
        barbeariaController.show(body.idBarbearia)
    ){
        return {
            id,
            nome: body.nome,
            bio: body.bio,
            foto: body.foto,
            idbarbearia: body.idbarbearia
        }
    }
}

module.exports = model