const dbSyncAndSeed = require("./seed");
const { User, Thing, Favorite } = require("./models");

Favorite.belongsTo(Thing);
Thing.hasMany(Favorite);
Favorite.belongsTo(User);
User.hasMany(Favorite);

User.getAll = function() {
  this.findAll({ include: [{ model: Favorite, include: [Thing] }] });
};

Thing.getAll = function() {
  this.findAll({ include: [{ model: Favorite, include: [User] }] });
};

module.exports = { dbSyncAndSeed, User, Thing, Favorite };
