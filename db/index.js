const dbSyncAndSeed = require("./seed");
const { User, Thing, Favorite } = require("./models");

Favorite.belongsTo(Thing);
Thing.hasMany(Favorite);
Favorite.belongsTo(User);
User.hasMany(Favorite);

module.exports = { dbSyncAndSeed, User, Thing, Favorite };
