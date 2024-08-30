let nextID = 1
const usuarioController = require('../controllers/usuario.js')
const model = (body, id = nextID++) => {
    if(
        body.nome != "",
        body.nome != undefined,
        usuarioController.show(body.idUsuario)
    ){
        return {
            id,
            nome: body.nome,
            idUsuario: body.idUsuario
        }
    }
}

module.exports = model