const { dbSyncAndSeed } = require("./db");

dbSyncAndSeed()
  .then(() => console.log("DB SYNC AND SEED COMPLETE"))
  .catch(ex => console.error(ex.message));

  