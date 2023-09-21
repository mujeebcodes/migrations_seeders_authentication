const Joi = require("joi");

const validateSignUp = (req, res, next) => {
  const signUpSchema = Joi.object({
    username: Joi.string().required(),
    user_type: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  });

  const { error, value } = signUpSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      message: error.details,
    });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  });

  const { error, value } = loginSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      message: error.details,
    });
  }
  next();
};

module.exports = { validateSignUp, validateLogin };
