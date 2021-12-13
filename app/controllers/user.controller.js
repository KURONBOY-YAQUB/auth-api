const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.status(200).send(users);
    }
  });
};
