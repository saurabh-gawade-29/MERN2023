const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    let defErrMsg = error.errors[0].message;
    res.status(400).json({ msg: defErrMsg });
  }
};

module.exports = validate;
