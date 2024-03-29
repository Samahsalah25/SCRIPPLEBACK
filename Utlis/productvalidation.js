const Joi = require("joi");

// Define validation schema
const productSchema = Joi.object({
  productName: Joi.string()
    .pattern(/^[a-zA-Z]{3,}$/)
    .required(),
  price: Joi.number().integer().required(),
  role: Joi.string()
    .valid("Charcoal", "Lnk drawing", `Graffit drawing`, `Digital drawing`)
    .default("Charcoal"),
  description: Joi.string().pattern(/^[a-zA-Z]{5,}$/),
  Image: Joi.string(),
  video: Joi.string(),
});

module.exports = productSchema;
