const User = require('./models/userModel');

const catchAsync = require('./../utils/catchAsync');

exports.GetAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.GetUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This is not defined yet!'
  });
};

exports.CreateUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This is not defined yet!'
  });
};

exports.UpdateUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This is not defined yet!'
  });
};

exports.DeleteUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This is not defined yet!'
  });
};
