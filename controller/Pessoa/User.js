const User = require('../../model/Pessoa/user')
const Gerente = require('../../model/Pessoa/gerente')
const Diretor = require('../../model/Pessoa/diretor')
const Atendente = require('../../model/Pessoa/atendente')

module.exports = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({}).populate('gerente')
                                         .populate('diretor')
                                         .populate('atendente');
            res.status(200).json(users);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    getById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('gerente');
            res.status(200).json(user);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    login: async (req, res, next) => {
        try {
            var login = req.body.login;
            const user = await User.findOne({login})
            const token = signToken(user);
            console.log(token)
            res.send(user)
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    postGerente: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            const newGerente = await Gerente.findById(req.params.id);
            user.gerente = newGerente;
            await user.save();
            const token = signToken(user);
            console.log(token);
            res.status(201).json(user);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    postAtendente: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            const newAtendente = await Atendente.findById(req.params.id)
            user.atendente = newAtendente;
            await user.save();
            const token = signToken(user);
            console.log(token);
            res.status(201).json(user);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    postDiretor: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            const newDiretor = await Diretor.findById(req.params.id)
            user.diretor = newDiretor;
            await user.save();
            const token = signToken(user);
            console.log(token);
            res.status(201).json(user);
        } catch(err){
            res.status(400).send(err.message)
        }
    },
    update: async (req, res) => {
        try {
            const newUser = req.body;
            await User.findByIdAndUpdate(req.params.id, newUser);
            res.status(200).send('The User has been updated!');
        } catch(err){
            res.status(400).send(err.message)
        }
    },

    delete: async (req, res) => {
        try{
            await User.findByIdAndRemove(req.params.id);
            res.status(200).send('The User has been deleted!');
        } catch(err){
            res.status(400).send(err.message)
        }
    }
}
