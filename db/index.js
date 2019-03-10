const db = require("./db");

const dbSyncAndSeed = () => {
  return db
    .authenticate()
    .then(() => db.sync({ force: true }))
    .then(() => console.log("db synced"))
    .catch(ex => console.error(ex.message));
};

module.exports = { dbSyncAndSeed };
