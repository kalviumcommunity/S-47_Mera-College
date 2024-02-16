const Joi = require("joi")
const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false })


const signupSchema = Joi.object({
    First_name: Joi.string().min(3).required(),
    Last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    mobile: Joi.number().min(10).required()
})

exports.validateSignup = validator(signupSchema)