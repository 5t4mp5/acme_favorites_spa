const db = require("./db");
const { User, Thing } = require("./models");

const dbSyncAndSeed = () => {
  return db
    .authenticate()
    .then(() => db.sync({ force: true }))
    .then(() => console.log("db synced"))
    .catch(ex => console.error(ex.message));
};

module.exports = { dbSyncAndSeed, User, Thing };
