const mongoose = require("mongoose");

const Section = mongoose.model(
  "Section",
  mongoose.Schema({
    section: String,
  })
);

module.exports = Section;
