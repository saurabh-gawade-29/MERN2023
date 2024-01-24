const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const status = 422;
    const message = "Fill the input properly";
    let extraDetails = error.errors[0].message;
    const err = {
      status,
      message,
      extraDetails,
    };
    //! Old Method now we handle error in centralized Way
    // res.status(400).json({ msg: defErrMsg });
    next(err);
  }
};

module.exports = validate;
