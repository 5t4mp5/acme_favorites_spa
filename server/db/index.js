const dbSyncAndSeed = require("./seed");
const { User, Thing, Favorite } = require("./models");

module.exports = { dbSyncAndSeed, User, Thing, Favorite };
