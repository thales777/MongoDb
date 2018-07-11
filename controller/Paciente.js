const Paciente = require('../model/paciente')
const Endereco = require('../model/endereco')


module.exports = {
    getAll: async (req, res) => {
        const pacientes = await Paciente.find({}).populate('endereco').populate('ficha').populate('localidade');
        res.status(200).json(pacientes);
    },

    postEndereco: async (req, res) => {
        console.log(req.body)        
        const newEndereco = new Endereco(req.body);
        console.log(newEndereco)
        const endereco = await newEndereco.save();
        console.log(endereco)
        res.status(201).json(endereco);
    },

    post: async (req, res) => {
        const newPaciente = new Paciente(req.body);
        const endereco = await Endereco.findById(req.params.id);

        newPaciente.endereco = endereco;
        await newPaciente.save();

        res.status(201).json(newPaciente);
    },

    getById: async (req, res) => {
        const paciente = await Paciente.findById(req.params.id).populate('ficha').populate('endereco');
        res.status(200).json(paciente);
    },

    update: async (req, res) => {
        const newPaciente = req.body;
        await Paciente.findByIdAndUpdate(req.params.id, newPaciente);
        res.status(200).send('The Paciente has been updated!');
    },

    delete: async (req, res) => {
        await Paciente.findByIdAndRemove(req.params.id);
        res.status(200).send('The Paciente has been deleted!');
    }
}
