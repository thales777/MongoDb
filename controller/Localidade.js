var Localidade = require('../model/Models').Localidade

exports.post = (req,res) => {
    
    const localidade = new Localidade();
    localidade.nome = req.body.nome;

    localidade.save(function(err, localidade) {
        Localidade.findOne(localidade).populate('fichas.localidade').exec(function (err, localidade) {
            res.json({
                status: 'success',
                message: "Fine",
                ficha: localidade.ficha.id(ficha._id)
            });
        });
    });
}

exports.getAll = (req,res) => {
    
    Localidade.find((err, localidade) => {
        if(err){
            res.send(err)
        }
        res.json(localidade);
    })
}

exports.getById = (req,res) => {

    Localidade.findById(req.params.id, function(error, localidade) {
        if(error)
            res.send('Id da Localidade não encontrado....: ' + error);

        res.json(localidade);
    });
}