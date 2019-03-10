const db = require("../db");
const Sequelize = db.Sequelize;

module.exports = db.define("thing", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});
