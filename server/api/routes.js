const router = require("express").Router();
const { User, Thing } = require("../db/models");

router.get("/users", (req, res, next) => {
   return User.getAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get("/things", (req, res, next) => {
    return Thing.getAll()
     .then(things => res.json(things))
     .catch(next);
 });

module.exports = router;