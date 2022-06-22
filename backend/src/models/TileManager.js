const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  static table = "tile";

  findAll() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${TileManager.table}`
    );
  }
}

module.exports = TileManager;
