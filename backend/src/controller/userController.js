const userModel = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

exports.createUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, subject, message } = req.body;
  if (!name && !email && !subject && !message && !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await userModel.create(req.body);
  res.status(201).json({ success: true, user });
});

exports.getAllUser = async (req, res) => {
  const user = await userModel.find();
  res.status(200).json({ success: true, user });
};

exports.loginUser = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Please Provide valid Email ",
    });
  }
  if (!password) {
    return res.status(400).json({
      message: "Please Provide valid Password",
    });
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      sucess: false,
      message: "User Not found",
    });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      sucess: false,
      message: "Please entered valid email and password",
    });
  }

  sendToken(user, 200, res);
});

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(new Date().getTime()),
    httpOnly: true,
  });

  res.status(200).json({
    sucess: true,
    message: "Logged Out Successfully",
  });
});

exports.userDeleted = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new ErrorHandler("Please Enter Id", 400));
  }

  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    return res.status(400).json({
      sucess: false,
      message: "User Not found",
    });
  }
  res.status(200).json({
    sucess: true,
    message: `${user.name} Deleted Successfully`,
  });
});
