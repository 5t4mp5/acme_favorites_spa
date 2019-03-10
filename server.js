const { dbSyncAndSeed } = require("./db");

dbSyncAndSeed().catch(ex => console.log(ex.message));
