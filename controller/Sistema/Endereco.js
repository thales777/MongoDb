const Endereco = require('../../model/Sistema/endereco')


module.exports = {

    postEndereco: async (req, res) => {
        try {
            const newEndereco = new Endereco(req.body);
            const endereco = await newEndereco.save();
            res.status(201).json(endereco);
        } catch(err) {
            res.status(400).send(err.message)
        }
    },
    getEndereco: async (req,res) => {
        try {
            const enderecos = await Endereco.find();
            res.status(200).json(enderecos);
        } catch(err){
            res.status(400).send(err.message)
        }
    } ,

    update: async (req, res) => {
        try {
            const newEndereco = req.body;
            await Endereco.findByIdAndUpdate(req.params.id, newEndereco);
            res.status(200).send('The endereco has been updated!');
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Endereco.findByIdAndRemove(req.params.id);
            res.status(200).send('The endereco has been deleted!');
        } catch(err){
            res.status(400).send(err.message)
        }
    }
}