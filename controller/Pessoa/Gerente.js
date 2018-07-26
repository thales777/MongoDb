const Gerente = require('../../model/Pessoa/gerente')
const Localidade = require('../../model/Sistema/localidade')

module.exports = {
    getAll: async (req, res) => {
        try {
            const gerentes = await Gerente.find({}).populate('localidade');
            res.status(200).json(gerentes);
        } catch(err) {
            res.status(400).send(err.message)
        }
    }, 
    getById: async (req, res) => {
        try {
            const gerente = await Gerente.findById(req.params.id);
            res.status(200).json(gerente);
        } catch(err) {
            res.status(400).send(err.message)
        }
    },
    post: async (req, res) => {
        try {
            const newGerente = new Gerente(req.body);
            const localidade = await Localidade.findById(req.params.id);
            localidade.gerente = newGerente;
            newGerente.localidade = localidade;
            //await
            localidade.save();
            newGerente.save();
            res.status(201).json(localidade);
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    update: async (req, res) => {
        try {
            const newGerente = req.body;
            await Gerente.findByIdAndUpdate(req.params.id, newGerente);
            res.status(200).send('The Gerente has been updated!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Gerente.findByIdAndRemove(req.params.id);
            res.status(200).send('The Gerente has been deleted!');
        } catch(err){
            res.status(400).send(err.message)
        }
    }
}