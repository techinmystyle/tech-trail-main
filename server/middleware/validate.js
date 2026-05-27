const { validationResult } = require('express-validator');

/**
 * Middleware to check validation results from express-validator.
 * Returns a structured 400 Bad Request response if there are any validation errors.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return first error message in main body, and detail all errors in array
    return res.status(400).json({
      message: errors.array()[0].msg,
      errors: errors.array().map(err => ({
        field: err.path || err.param,
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = validate;
