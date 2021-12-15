const db = require("../models");
const Audio = db.audio;

exports.audio_upload = (req, res) => {
  const audio = new Audio({
    name: req.file.path,
  });

  // if (err) {
  //   res.status(400).json({
  //     result: "failed",
  //     message: `Cannot upload files. Error is ${err}`,
  //   });
  // } else {
  //   if (req.file === undefined) {
  //     res.status(400).json({
  //       result: "failed",
  //       message: "You are not submit images",
  //     });
  //   } else {
  //     console.log(req.file);
  //     res.status(200).json({
  //       result: "ok",
  //       message: "Upload image successfully",
  //       path: req.file.originalname,
  //     });
  //   }
  // }

  audio.save((err, audio) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (audio) {
      res.send({ message: "Audio uploaded successfully!" });
      return;
    }

    res.send({ message: "Error uploading" });

    // audio.save((err) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }

    //   res.send({ message: "Audio uploaded successfully!" });
    // });
  });
};
