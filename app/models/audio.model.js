const mongoose = require("mongoose");

const Audio = mongoose.model(
  "Audio",
  mongoose.Schema(
    {
      url: String,
      sectionId: {
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
