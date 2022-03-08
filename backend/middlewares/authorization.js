const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const {authorization} = req.headers;
    const {bdwinner} = jwt.verify(authorization, 'secreto');
    req.bdwinner = bdwinner;
    next();
}