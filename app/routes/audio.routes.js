const { upload } = require("../middlewares");
const controller = require("../controllers/audio.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/upload/audio", upload.single("file"), controller.audio_upload);
  app.get("/api/get/audio/:id", controller.get_audio);
  app.post("/api/add/section", controller.add_section);
  app.get("/api/download/:id", controller.download_audio);
  app.get("/api/audios/section/:id", controller.getAudioInSection);
};
