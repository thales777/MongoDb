var Ficha = require('../model/Models').Ficha
var Localidade = require('../model/Models').Localidade

exports.getAll = (req,res) => {
    
    Ficha.find((err, fichas) => {
        if(err){
            res.send(err)
        }
        res.json(fichas);
    })
}

exports.getById = (req,res) => {

    Ficha.findById(req.params.id, function(error, ficha) {
        if(error)
            res.send('Id da Ficha não encontrado....: ' + error);

        res.json(ficha);
    });
}

exports.post = (req,res) => {

    const ficha = new Ficha();    

    ficha.sintomas = req.body.sintomas,
    ficha.doença = req.body.doença,
    ficha.hipertenso = req.body.hipertenso,
    ficha.alergico = req.body.alergico,
    ficha.diabetes = req.body.diabetes,
    ficha.prescricao = req.body.prescricao,
    ficha.observacoes = req.body.observacoes,

    Ficha.findOne(ficha).populate(req.body.localidade).exec(function(err, ficha) {
        ficha.populate(req.body.localidade);
    })
    
    ficha.save(function(err, ficha){
        res.json(ficha);
    })
}
exports.put = (req,res) => {

    Ficha.findById(req.params.id, function(error, ficha) {
        if (error) 
            res.send("Id do Ficha não encontrado....: " + error);

        //dataDoAtendimento = req.body.dataDoAtendimento,
        ficha.sintomas = req.body.sintomas,
        ficha.doença = req.body.doença,
        ficha.hipertenso = req.body.hipertenso,
        ficha.alergico = req.body.alergico,
        ficha.diabetes = req.body.diabetes,
        ficha.prescricao = req.body.prescricao,
        // paciente = req.body.paciente,
        ficha.observacoes = req.body.observacoes,
        localidade = req.body.localidade,

        ficha.save(function(error) {
            if(error)
                res.send('Erro ao atualizar o Ficha....: ' + error);

            res.json({ message: 'Ficha atualizado com sucesso!' });
        });
    });
}

exports.delete = (req,res) => {

    Ficha.remove({
        _id: req.params.id
        }, function(error) {
            if (error) 
                res.send("Id do Ficha não encontrado....: " + error);

            res.json({ message: 'Ficha Excluído com Sucesso!' });
        });
}




