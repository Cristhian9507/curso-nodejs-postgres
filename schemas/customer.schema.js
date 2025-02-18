const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();


const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateCustomerSchema = Joi.object({
  id,
  name,
  lastName,
  userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
