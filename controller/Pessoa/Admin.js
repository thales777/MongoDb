const Admin = require('../../model/Pessoa/admin')

module.exports = {
    
    update: async (req, res) => {
        const admin = req.body;
        await Atendente.findByIdAndUpdate(req.params.id, admin);
        res.status(200).send('Suas alterações foram feitas com sucesso!');
    },

}