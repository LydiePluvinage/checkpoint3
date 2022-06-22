const express = require("express");

const { BoatController, TileController } = require("./controllers");

const router = express.Router();

router.get("/tiles", TileController.browse);

router.get("/boat", BoatController.get);
router.put("/boat/move/:x/:y", BoatController.move);

module.exports = router;
