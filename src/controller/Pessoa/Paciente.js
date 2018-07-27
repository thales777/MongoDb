const Paciente = require('../../model/Pessoa/paciente')
const Endereco = require('../../model/Sistema/endereco')


module.exports = {
    getAll: async (req, res) => {
        try {
            const pacientes = await Paciente.find({}).populate('endereco').populate('localidade');
            res.status(200).json(pacientes);
        } catch(err) {
            res.status(400).send(err.message)
        }
    }, 
    getById: async (req, res) => {
        try {
            const paciente = await Paciente.findById(req.params.id).populate('endereco');
            res.status(200).json(paciente);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    post: async (req, res) => {
        try {
            const newPaciente = new Paciente(req.body);
            const endereco = await Endereco.findById(req.params.id);
            newPaciente.endereco = endereco;
            await newPaciente.save();
            res.status(201).json(newPaciente);
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    update: async (req, res) => {
        try {
            const newPaciente = req.body;
            await Paciente.findByIdAndUpdate(req.params.id, newPaciente);
            res.status(200).send('The Paciente has been updated!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Paciente.findByIdAndRemove(req.params.id);
            res.status(200).send('The Paciente has been deleted!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    }
}
