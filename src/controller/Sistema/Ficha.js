var Ficha = require('../../model/Sistema/ficha')
var Localidade = require('../../model/Sistema/localidade')
var Paciente = require('../../model/Pessoa/paciente')

module.exports = {
    getAll: async (req, res) => {
        try {
            const fichas = await Ficha.find().populate('paciente');
            res.status(200).json(fichas);
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    getById: async (req, res) => {
        try {
            const ficha = await Ficha.findById(req.params.id).populate('paciente');
            res.status(200).json(ficha);
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    update: async (req, res) => {
        try {
            const newFicha = req.body;
            await Ficha.findByIdAndUpdate(req.params.id, newFicha);
            res.status(200).send('The ficha has been updated!');
        } catch(err) {
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            await Ficha.findByIdAndRemove(req.params.id);
            res.status(200).send('The ficha has been deleted!');
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    postNewFichaPaciente: async (req, res) => {
        try{
            const newFicha = new Ficha(req.body);
            const paciente = await Paciente.findById(req.params.id);
            newFicha.paciente = paciente;
            await newFicha.save();
            //await
            paciente.ficha = newFicha
            paciente.save();
            res.status(201).json(newFicha);
        } catch(err) {
            res.status(400).send(err.message)
        }
    }    
}




