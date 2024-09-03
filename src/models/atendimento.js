let nextID = 1;
const clienteController = require('../controllers/cliente.js');
const servicoController = require('../controllers/servico.js');


const model = (body, id = nextID++) => {
    if(
        Array.isArray(body.servicos) &&
        servicoController.show(body.servico.servicoID) &&
        body.horarioInicio != undefined &&
        body.horarioInicio != "" &&
        body.statusPagamento != undefined &&
        body.statusPagamento != "" &&
        clienteController.show(body.clienteID)
    ) {
        return {
            id,
            servicos: body.servicos,
            clienteID: body.clienteID,
            horarioInicio: body.horarioInicio,
            statusPagamento: body.statusPagamento
        }
    }
    return
}

module.exports = model 

