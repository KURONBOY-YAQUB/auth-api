const mongoose = require("mongoose");

const Audio = mongoose.model(
  "Audio",
  mongoose.Schema(
    {
      url: String,
      section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Audio;
