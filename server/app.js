const express = require("express");
const app = express();
const router = require("./api/routes");
const path = require("path");

app.use("/api", router);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

module.exports = app;
