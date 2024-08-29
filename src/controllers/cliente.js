const db = [];
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