const router = require("express").Router();
const { notes } = require("../../develop/db/db");

router.get("/notes", (req, res) => {
    let results = notes;

    res.json(results);
    console.log(results);
});

router.post("/notes", (req, res) => {
    notes.push(req.body);

    fs.writeFile('../../develop/db/db', notes, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("db updated");
        }
    })
});

module.exports = router;