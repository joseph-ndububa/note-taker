const router = require("express").Router();
const { notes } = require("../../data/notes");
const fs = require('fs');

router.get("/notes", (req, res) => {
    let results = notes;

    res.json(results);
});

router.post("/notes", (req, res) => {
    let newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.send(newNote);
});

module.exports = router;