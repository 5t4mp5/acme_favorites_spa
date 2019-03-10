const db = require("../db");
const Sequelize = db.Sequelize;

module.exports = db.define("favorite", {
  rank: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
