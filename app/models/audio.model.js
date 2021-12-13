const mongoose = require("mongoose");

const Audio = mongoose.model(
  "Audio",
  mongoose.Schema(
    {
      name: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Audio;
