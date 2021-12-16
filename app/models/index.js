const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.audio = require("./audio.model");
db.section = require("./section.model");

db.ROLES = ["user", "admin"];

module.exports = db;
