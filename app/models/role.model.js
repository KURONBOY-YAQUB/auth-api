const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  mongoose.Schema({
    name: String,
  })
);

module.export = Role;
