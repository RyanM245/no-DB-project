const express = require("express");
const app = express();
const ctrl = require("./ctrl");
app.use(express.json());

app.get("/api/sayings", ctrl.getSaying);
app.post("/api/sayings", ctrl.addSaying);
app.delete("/api/sayings/:id", ctrl.deleteSaying);
app.put("/api/sayings/:id", ctrl.editSaying);

const port = 5000;
app.listen(port, () => console.log(`I will survive on ${port}`));
