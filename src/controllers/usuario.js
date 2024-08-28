const db = [];
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

const store = body => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 201
    }
    return 400
}

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id);
    const atualizar = model(body, id);

    if(atualizar && index != -1){
        db[index] = atualizar;
        return 200
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id);
    if(index != -1){
        db.splice(index,1);
        return 200
    }
    return 400
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}