const User = require('../../model/Pessoa/user')
const Gerente = require('../../model/Pessoa/gerente')
const Diretor = require('../../model/Pessoa/diretor')
const Atendente = require('../../model/Pessoa/atendente')

//Imports Segurança

var JWT = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var signToken = require('../../security/signToken')

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

        if(!req.body.login) {
            return res.status(401).send({ "success": false, "message": "A `username` is required"});
        } else if(!req.body.senha) {
            return res.status(401).send({ "success": false, "message": "A `password` is required"});
        }
        let login = req.body.login;
        let senha = req.body.senha;
    
        const user = await User.findOne({login});
        
        if(!user){
            return res.status(401).send({ "success": false, "message": "Não foi encontrado usuario com esse login"})
        }
    
        bcrypt.compare(senha, user.senha, function(error, result) {
            if(error || !result) {
                return res.status(401).send({ "success": false, "message": "Invalid username and password" });
            }
            var token = JWT.signToken(user);
            res.setHeader("authorization", token);
            res.send(user);
        });
    
    },
    postGerente: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            const newGerente = await Gerente.findById(req.params.id);
            user.gerente = newGerente;
            await user.save();
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
