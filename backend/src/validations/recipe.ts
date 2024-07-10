import Joi from "joi";

const cookingMethodsEnum = ["Microondas", "Forno", "Fogão"];

const schema = Joi.object({
  people: Joi.number().integer().min(1).required(),
  ingredients: Joi.array().items(Joi.string()).min(1).required(),
  spices: Joi.array().items(Joi.string()).min(1).required(),
  cookingMethods: Joi.array()
    .items(Joi.string().valid(...cookingMethodsEnum))
    .min(1)
    .required(),
});

export default schema;
