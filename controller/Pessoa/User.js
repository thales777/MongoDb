const User = require('../../model/Pessoa/user')
const Gerente = require('../../model/Pessoa/gerente')
const Diretor = require('../../model/Pessoa/diretor')
const Atendente = require('../../model/Pessoa/atendente')

module.exports = {
    getAll: async (req, res) => {
        const users = await User.find({}).populate('gerente')
                                         .populate('diretor')
                                         .populate('atendente');
        res.status(200).json(users);
    },
    getById: async (req, res) => {
        const user = await User.findById(req.params.id).populate('gerente');
        res.status(200).json(user);
    },
    login: async (req, res, next) => {
        var login = req.body.login;
        const user = await User.findOne({login})
        const token = signToken(user);
        console.log(token)
        res.send(user)
        //res.status(200).json({ token });
    },
    postGerente: async (req, res) => {
        const user = new User(req.body);
        await user.save();
        const newGerente = await Gerente.findById(req.params.id);
        user.gerente = newGerente;
        await user.save();
        const token = signToken(user);
        console.log(token);
        res.status(201).json(user);
    },
    postAtendente: async (req, res) => {
        const user = new User(req.body);
        await user.save();
        const newAtendente = await Atendente.findById(req.params.id)
        user.atendente = newAtendente;
        await user.save();
        const token = signToken(user);
        console.log(token);
        res.status(201).json(user);
    },
    postDiretor: async (req, res) => {
        const user = new User(req.body);
        await user.save();
        const newDiretor = await Diretor.findById(req.params.id)
        user.diretor = newDiretor;
        await user.save();
        const token = signToken(user);
        console.log(token);
        res.status(201).json(user);
    },
    update: async (req, res) => {
        const newUser = req.body;
        await User.findByIdAndUpdate(req.params.id, newUser);
        res.status(200).send('The User has been updated!');
    },

    delete: async (req, res) => {
        await User.findByIdAndRemove(req.params.id);
        res.status(200).send('The User has been deleted!');
    }
}
