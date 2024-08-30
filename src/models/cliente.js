let nextID = 1
const model = (body, id = nextID++) => {
    if(
        body.nome != "" &&
        body.nome != undefined &&
        body.telefone != "" &&
        body.telefone != undefined &&
        body.email != "" &&
        body.email != undefined 
    ){
        return {
            id,
            nome: body.nome,
            email: body.email,
            telefone: body.telefone
        }
    }
}

module.exports = {
    model
}