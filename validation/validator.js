const Joi = require('joi');

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = Joi.validate({ param: req.params[name] }, schema);

            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value)
                    req.value = {};

                if (!req.value.params)
                    req.value.params = {};

                req.value.params[name] = result.value.param;
                next();
            }
        };
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

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
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),

        pacienteSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(15).required(),
            nomeDaMae: Joi.string().min(3).max(15).required(),
            sexo: Joi.boolean().required(),
            emEspera: Joi.boolean().required()
        }),

        localidadeSchema: Joi.object().keys({
            nome: Joi.string().min(3).max(15).required()
        }),

        fichaSchema: Joi.object().keys({

            sintomas: Joi.string().required(),
            doença: Joi.string().required(),
            hipertenso: Joi.boolean().required(),
            alergico: Joi.boolean().required(),
            diabetes: Joi.boolean().required(),
            doença: Joi.string().required(),
            observacoes: Joi.boolean().required()
        })
    }
}