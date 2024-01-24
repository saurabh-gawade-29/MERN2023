const errorMiddleware = (err, req, res, next) => {
  debugger
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error From Backend";

  return res.status(status).json({
    message: message,
    extraDetails: extraDetails,
  });
};

module.exports = errorMiddleware;
