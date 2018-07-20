const Gerente = require('../../model/Pessoa/gerente')
const Localidade = require('../../model/Sistema/localidade')

module.exports = {
    getAll: async (req, res) => {
        const gerentes = await Gerente.find({});
        res.status(200).json(gerentes);
    }, 
    getById: async (req, res) => {
        const gerente = await Gerente.findById(req.params.id);
        res.status(200).json(gerente);
    },
    post: async (req, res) => {
        const newGerente = new Gerente(req.body);
        const localidade = await Localidade.findById(req.params.id);

        localidade.gerente = newGerente;
        await localidade.save();
        await newGerente.save();

        res.status(201).json(localidade);
    },

    update: async (req, res) => {
        const newGerente = req.body;
        await Gerente.findByIdAndUpdate(req.params.id, newGerente);
        res.status(200).send('The Gerente has been updated!');
    },

    delete: async (req, res) => {
        await Gerente.findByIdAndRemove(req.params.id);
        res.status(200).send('The Gerente has been deleted!');
    }
}