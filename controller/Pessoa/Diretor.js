const Diretor = require('../../model/Pessoa/diretor')
module.exports = {
    
    post: async (req,res) => {
        const newDiretor = new Diretor(req.body);
        await newDiretor.save();
        res.send(newDiretor)
    },

    update: async (req, res) => {
        const diretor = req.body;
        await Diretor.findByIdAndUpdate(req.params.id, diretor);
        res.status(200).send('Suas alterações foram feitas com sucesso!');
    },

}