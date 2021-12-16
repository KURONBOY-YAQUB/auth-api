const db = require("../models");
const Audio = db.audio;
const Section = db.section;
const fs = require("fs");

exports.audio_upload = (req, res) => {
  const audio = new Audio({
    url: req.file.path,
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

exports.get_audio = (req, res) => {
  const getAudio = req.params.id;
  Audio.findOne({
    _id: getAudio,
  })
    .populate("section", "-__v")
    .exec((err, audio) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (!audio) {
        return res.status(500).json({ message: "No information found!" });
      }
      if (audio) {
        return res.status(200).json({
          id: audio._id,
          url: audio.url,
          section: audio.section.section,
        });
      }
    });
};

exports.add_section = (req, res) => {
  const section = Section({
    section: req.body.section,
  });

  section.save((err, section) => {
    if (err) {
      return res.status(404).json({ message: err });
    }
    if (!section) {
      return res.status(404).json({ message: "Error insert section" });
    }
    if (section) {
      return res
        .status(200)
        .json({ message: "Insert section successfully!", section });
    }
  });
};

exports.download_audio = (req, res) => {
  const getAudio = req.params.id;
  Audio.findOne(
    { _id: getAudio },

    (err, audio) => {
      if (err) {
        return res.status(404).json({ message: err });
      }
      if (audio) {
        const fullPath = audio.url;
        if (!fs.existsSync(fullPath)) {
          return res
            .status(404)
            .json({ message: "File deleted or folder is changed!" });
        } else {
          return res.download(fullPath);
        }
      }
    }
  );
};

// Get on the section

exports.section_1 = (req, res) => {
  Audio.find()
    .populate("section", "-__v")
    .exec((err, audios) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (!audios) {
        return res.status(500).json({ message: "No information found!" });
      }
      if (audios) {
        return res.status(200).json({
          audios,
        });
      }
    });
};
