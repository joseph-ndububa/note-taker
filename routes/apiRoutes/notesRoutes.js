const router = require("express").Router();
const { notes } = require("../../develop/db/db");
const fs = require('fs');

router.get("/notes", (req, res) => {
    let results = notes;

    res.json(results);
});

router.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log(notes);
    const noteData = `${notes}`;

    fs.writeFile('../../develop/db/db', noteData, err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("db updated");
        }
    })
});

module.exports = router;