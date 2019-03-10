const express = require("express");
const app = express();
const router = require("./api/routes");

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("THIS WILL BE A HOME PAGE");
});

module.exports = app;
