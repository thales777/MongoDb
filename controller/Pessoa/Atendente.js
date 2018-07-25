const Atendente = require('../../model/Pessoa/atendente')
const Localidade = require('../../model/Sistema/localidade')

module.exports = {
    getAll: async (req, res) => {
        try{
            const atendentes = await Atendente.find({});
            res.status(200).json(atendentes);
        } catch(err){
            res.status(400).send(err)
        }
    }, 
    getById: async (req, res) => {
        try{
            const atendente = await Atendente.findById(req.params.id);
            res.status(200).json(atendente);
        } catch (err){
            res.status(404).send("Atendente não encontrada")
        }
    },
    post: async (req, res) => {
        try {
            const newAtendente = new Atendente(req.body);
            const localidade = await Localidade.findById(req.params.id);
            localidade.atendentes.push(newAtendente);
            localidade.save();
            newAtendente.save();       
            res.status(201).json(localidade)
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    update: async (req, res) => {
        try {
            const newAtendente = req.body;
            await Atendente.findByIdAndUpdate(req.params.id, newAtendente);
            res.status(200).send('The Atendente has been updated!');
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Atendente.findByIdAndRemove(req.params.id);
            res.status(200).send('The Atendente has been deleted!');
        } catch(err){
            res.status(400).send(err.message)
        }
    }
}