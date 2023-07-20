const mongoose = require("mongoose");

const inCognitoSchema = mongoose.Schema(
  {
    masked: {
      type: String,
      required: true,
      unique: true,
    },
    originUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

exports.Incognito = mongoose.model("Incognito", inCognitoSchema);
