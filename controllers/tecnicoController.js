const tecnicoService = require('../services/tecnicoService');

function criar(req, res){
    console.log("1 - CONTROLLER recebeu", req.body);

    const tecnico = tecnicoService.criar(req.body)

    res.status(201).json(tecnico);
}

module.exports = {criar}