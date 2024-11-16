import Joi from "joi";
//validacion de datos

//atributos
//const id = Joi.string().uuid();
const id = Joi.number().integer();
//const name = Joi.string().alphanum().min(3).max(30)
const name =  Joi.string()
.regex(/^[a-zA-Z0-9 ]+$/) // Acepta alfanuméricos y espacios
.min(3)
.max(30);
const price = Joi.number().integer().min(3)
//const image = Joi.string().uri()

//creacion de objeto
export const createProductSchema = Joi.object(
    {
        id: id.required(),
        name: name.required(),
        price: price.required()
    }
)

export const updateProductSchema = Joi.object(
    {
        name: name.required(),
        price: price.required()
    }
)
export const getProductSchema = Joi.object(
    {
        id: id.required()
    }
)