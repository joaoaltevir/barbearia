let nextID = 1
const redeController = require('../controllers/rede.js')
const model = (body, id = nextID++) => {
    if(
        body.nome != "" &&
        body.nome != undefined &&
        body.fotos != "" &&
        body.fotos != undefined &&
        body.endereco != undefined &&
        redeController.show(body.idRede)
    ){
        return {
            id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            idRede: body.idRede
        }
    }
}

module.exports = model