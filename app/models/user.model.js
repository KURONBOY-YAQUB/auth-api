const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      fname: {
        type: String,
        required: true,
      },
      lname: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
