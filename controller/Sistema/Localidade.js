const Localidade = require('../../model/Sistema/localidade')
const Ficha = require('../../model/Sistema/ficha')
const Endereco = require('../../model/Sistema/endereco')


module.exports = {
    getAll: async (req, res) => {
        try {
            const localidades = await Localidade.find({}).populate('endereco')
                                                     .populate('fichas')
                                                     .populate('gerente')
                                                     .populate('atendentes');
            res.status(200).json(localidades);
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    postLocalidadeEndereco: async (req, res) => {
        try {
            const newLocalidade = new Localidade(req.body);
            const endereco = await Endereco.findById(req.params.id_Endereco);
            newLocalidade.endereco = endereco;
            newLocalidade.save();
            res.status(201).json(newLocalidade);
        }catch(err){
            res
        }
    },

    postLocalidadeFicha: async (req, res) => {
        try {
            const localidade = await Localidade.findById(req.params.id_Localidade);
            const ficha = await Ficha.findById(req.params.id_Ficha);
            ficha.localidade = localidade;
            localidade.fichas.push(ficha);
            //await
            localidade.save();
            ficha.save();
            res.status(201).json(localidade);
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    getById: async (req, res) => {
        try {
            const localidade = await Localidade.findById(req.params.id).populate('endereco');
            res.status(200).json(localidade);
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    update: async (req, res) => {
        try {
            const newLocalidade = req.body;
            await Localidade.findByIdAndUpdate(req.params.id, newLocalidade);
            res.status(200).send('The Localidade has been updated!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Localidade.findByIdAndRemove(req.params.id);
            res.status(200).send('The Localidade has been deleted!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    },
    
}

