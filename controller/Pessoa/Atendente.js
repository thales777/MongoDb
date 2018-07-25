const Atendente = require('../../model/Pessoa/atendente')
const Localidade = require('../../model/Sistema/localidade')

module.exports = {
    getAll: async (req, res) => {
        const atendentes = await Atendente.find({});
        res.status(200).json(atendentes);
    }, 
    getById: async (req, res) => {
        const atendente = await Atendente.findById(req.params.id);
        if(!atendente){
            res.send("Nenhum Atendente Encontrado no id : " + req.params.id)
        }
        res.status(200).json(atendente);
    },
    post: async (req, res) => {
        const newAtendente = new Atendente(req.body);
        const localidade = await Localidade.findById(req.params.id);
        localidade.atendentes.push(newAtendente);
        //await
        localidade.save();
        newAtendente.save();       

        res.status(201).json(localidade);
    },

    update: async (req, res) => {
        const newAtendente = req.body;
        await Atendente.findByIdAndUpdate(req.params.id, newAtendente);
        res.status(200).send('The Atendente has been updated!');
    },

    delete: async (req, res) => {
        await Atendente.findByIdAndRemove(req.params.id);
        res.status(200).send('The Atendente has been deleted!');
    }
}