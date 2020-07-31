const sayings = require("../sayings.json");
let id = 6;

module.exports = {
  getSaying: (req, res) => {
    // console.log("hit back end")
    res.status(200).send(sayings);
  },
  addSaying: (req, res) => {
    const { saying } = req.body;
    const newSaying = {
      id,
      saying,
      edit: false,
    };
    id++;
    sayings.push(newSaying);
    res.status(200).send(sayings);
  },
  deleteSaying: (req, res) => {
    const { id } = req.params;
    const i = sayings.findIndex((el) => el.id === +id);
    if (i === -1) {
      res.sendStatus(404);
    } else {
      sayings.splice(i, 1);
      return res.status(200).send(sayings);
    }
  },
  editSaying: (req, res) => {
    const { id } = req.params;
    const { saying } = req.body;
    const index = sayings.findIndex((el) => {
      return el.id === +id;
    });
    sayings[index].saying = saying;
    return res.status(200).send(sayings);
  },
};
