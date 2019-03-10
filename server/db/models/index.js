const Thing = require("./Thing");
const User = require("./User");
const Favorite = require("./Favorite");

Favorite.belongsTo(Thing);
Thing.hasMany(Favorite);
Favorite.belongsTo(User);
User.hasMany(Favorite);

User.getAll = function() {
  return this.findAll({ include: [{ model: Favorite, include: [Thing] }] });
};

Thing.getAll = function() {
  return this.findAll({ include: [{ model: Favorite, include: [User] }] });
};

module.exports = { Thing, User, Favorite };
