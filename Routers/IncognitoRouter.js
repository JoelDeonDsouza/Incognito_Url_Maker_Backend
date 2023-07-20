const { Incognito } = require("../Models/IncognitoModel");
const express = require("express");
const router = express.Router();

// Get incognito originUrl //
router.get("/:incog", async (req, res) => {
  try {
    const incog = req.params.incog;
    const urlRender = await Incognito.findOne({ masked: incog });
    if (!urlRender) {
      return res.status(404).json({ error: "Incog URL not found" });
    }
    res.redirect(urlRender.originUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST incognito //
router.post(`/create`, async (req, res) => {
  const incog = new Incognito({
    masked: req.body.masked,
    originUrl: req.body.originUrl,
  });
  try {
    const savedIncog = await incog.save();
    res.status(201).json({
      savedIncog,
      maskedUrl: `http://localhost:6000/incognito/${savedIncog.masked}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
