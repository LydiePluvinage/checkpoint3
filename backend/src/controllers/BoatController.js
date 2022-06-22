const models = require("../models");

class BoatController {
  static get = (req, res) => {
    models.boat
      .findAll()
      .then(([rows]) => {
        res.send(rows[0]);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static move = (req, res) => {
    const boat = {
      name: "Black Pearl",
      coord_x: parseInt(req.params.x, 10),
      coord_y: parseInt(req.params.y, 10),
    };

    models.boat
      .update(boat)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.send(boat);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = BoatController;
