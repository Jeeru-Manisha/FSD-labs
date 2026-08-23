const express = require("express");
const app = express();

app.delete("/student/:id", (req, res) => {
    res.send(`Deleted ${req.params.id}`);
});

app.listen(3000);