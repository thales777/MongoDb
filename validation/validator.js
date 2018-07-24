const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema, {abortEarly: false});

            if (result.error) {
                return res.status(400).json(result.error);
            } else { 

                if (!req.value)
                    req.value = {};

                if (!req.value['body'])
                    req.value['body'] = [];

                req.value['body'] = result.value;
                next();
            }
        };
    },

    schemas: {
        pacienteSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(30).required(),
            cpf: Joi.string().length(11).required(),
            nomeDaMae: Joi.string().min(3).max(30).required(),
            sexo: Joi.boolean().required(),
        }),
        atendenteSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(30).required(),
            cpf: Joi.string().length(11).required(),
            sexo: Joi.boolean().required(),
        }),
        userSchema: Joi.object().keys({
            login: Joi.string().min(6).max(12).required(),
            senha: Joi.string().min(6).max(12).required(),
            tipo: Joi.string().required(),
        }),
        gerenteSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(30).required(),
            cpf: Joi.string().length(11).required()
        }),
        localidadeSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(20).required()
        }),
        diretorSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(20).required()
        }),
        fichaSchema: Joi.object().keys({
            sintomas: Joi.string().required(),
            doença: Joi.string().required(),
            hipertenso: Joi.boolean().required(),
            alergico: Joi.boolean().required(),
            diabetes: Joi.boolean().required(),
            prescricao: Joi.string().required(),
            doença: Joi.string().required(),
            observacoes: Joi.boolean().required(),
            data : Joi.date().required()
        }),
        enderecoSchema: Joi.object().keys({
            rua: Joi.string().min(3).max(20).required(),
            bairro: Joi.string().min(3).max(20).required(),
            uf: Joi.string().length(2).required(),
            cep: Joi.string().length(8).required(),
            numero: Joi.number().integer().required()
        })
    }
}