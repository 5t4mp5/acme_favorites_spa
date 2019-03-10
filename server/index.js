const { dbSyncAndSeed } = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

dbSyncAndSeed()
  .then(() => console.log("DB SYNC AND SEED COMPLETE"))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`I'm listening... on port ${PORT}`);
    })
  )
  .catch(ex => console.error(ex.message));
