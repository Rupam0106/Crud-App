const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.isAuthenticate = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
        message:"Please login to access the data"
    })
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await userModel.findById(decodedToken.id);
  next();
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({
            message:"Only Admin access the data"
        })
    }

    next();
  };
};