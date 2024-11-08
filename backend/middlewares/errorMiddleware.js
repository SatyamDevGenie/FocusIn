// errorHandler.js

export const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  export const errorHandler = (err, res) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: errorHandler.messsge,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  };