const Localidade = require('../../model/Sistema/localidade')
const Ficha = require('../../model/Sistema/ficha')
const Endereco = require('../../model/Sistema/endereco')


module.exports = {
    getAll: async (req, res) => {
        const localidades = await Localidade.find({}).populate('endereco')
                                                     .populate('fichas')
                                                     .populate('gerente')
                                                     .populate('atendentes');
        res.status(200).json(localidades);
    },

    postLocalidadeEndereco: async (req, res) => {
        const newLocalidade = new Localidade(req.body);
        const endereco = await Endereco.findById(req.params.id_Endereco);

        newLocalidade.endereco = endereco;
        await newLocalidade.save();

        res.status(201).json(newLocalidade);
    },

    //Ver Esse metodo com mais calma
    postLocalidadeFicha: async (req, res) => {
        const localidade = await Localidade.findById(req.params.id_Localidade);
        const ficha = await Ficha.findById(req.params.id_Ficha);
        ficha.localidade = localidade;
        localidade.fichas.push(ficha);
        await localidade.save();
        await ficha.save();

        res.status(201).json(localidade);
    },

    getById: async (req, res) => {
        const localidade = await Localidade.findById(req.params.id).populate('endereco');
        res.status(200).json(localidade);
    },

    update: async (req, res) => {
        const newLocalidade = req.body;
        await Localidade.findByIdAndUpdate(req.params.id, newLocalidade);
        res.status(200).send('The Localidade has been updated!');
    },

    delete: async (req, res) => {
        await Localidade.findByIdAndRemove(req.params.id);
        res.status(200).send('The Localidade has been deleted!');
    },
    
}

