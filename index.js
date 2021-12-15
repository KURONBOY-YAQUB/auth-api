const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

// Connect to database
db.mongoose
  .connect("mongodb://localhost/node-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
    initial();
  })
  .catch((err) => {
    console.log(err);
    // process.exit();
  });

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/audio.routes")(app);

// set port, listen for requests
const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
