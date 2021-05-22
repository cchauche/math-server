/**
 * Add this middleware to the POST '/math' routes to
 * convert a and b which come in as strings into
 * integers
 */

module.exports = (req, res, next) => {
  req.body.a = parseInt(req.body.a);
  req.body.b = parseInt(req.body.b);
  next();
}
