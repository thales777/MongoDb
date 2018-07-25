const Paciente = require('../../model/Pessoa/paciente')
const Endereco = require('../../model/Sistema/endereco')


module.exports = {
    getAll: async (req, res) => {
        const pacientes = await Paciente.find({}).populate('endereco').populate('localidade');
        res.status(200).json(pacientes);
    }, 
    getById: async (req, res) => {
        const paciente = await Paciente.findById(req.params.id).populate('endereco');
        res.status(200).json(paciente);
    },
    post: async (req, res) => {
        const newPaciente = new Paciente(req.body);
        const endereco = await Endereco.findById(req.params.id);

        newPaciente.endereco = endereco;
        await newPaciente.save();

        res.status(201).json(newPaciente);
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
