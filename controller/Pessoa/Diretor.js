const Diretor = require('../../model/Pessoa/diretor')
module.exports = {
    
    post: async (req,res) => {
        try {
            const newDiretor = new Diretor(req.body);
            await newDiretor.save();
            res.send(newDiretor)
        } catch(err) {
            res.status(400).send(err.message)
        }
},

    update: async (req, res) => {
        try {
            const diretor = req.body;
            await Diretor.findByIdAndUpdate(req.params.id, diretor);
            res.status(200).send('Suas alterações foram feitas com sucesso!');
        } catch(err) {
            res.status(400).send(err.message);
        }
    }

}