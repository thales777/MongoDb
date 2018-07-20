const Endereco = require('../../model/Sistema/endereco')


module.exports = {

    postEndereco: async (req, res) => {
        const newEndereco = new Endereco(req.body);
        const endereco = await newEndereco.save();
        res.status(201).json(endereco);
    },
    getEndereco: async (req,res) => {
        const enderecos = await Endereco.find();
        res.status(200).json(enderecos);
    } ,

    update: async (req, res) => {
        const newEndereco = req.body;
        await Endereco.findByIdAndUpdate(req.params.id, newEndereco);
        res.status(200).send('The endereco has been updated!');
    },

    delete: async (req, res) => {
        await Endereco.findByIdAndRemove(req.params.id);
        res.status(200).send('The endereco has been deleted!');
    }
}