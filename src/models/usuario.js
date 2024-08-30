let nextID = 1
const model = (body, id = nextID++) => {
    if(
        body.email != "",
        body.email != undefined,
        body.senha != "",
        body.senha != undefined,
        body.senha.lenght > 3  
    ){
        return {
            id,
            email: body.email,
            senha: body.senha
        }
    }
}

module.exports = model