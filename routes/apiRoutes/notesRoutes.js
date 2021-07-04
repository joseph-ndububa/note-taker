const router = require("express").Router();
const { notes } = require("../../data/notes");
const fs = require('fs');
const createNewNote = require('../../lib/notes.js');

router.get("/notes", (req, res) => {
    let results = notes;

    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    let newNote = req.body;
    console.log(notes);
    createNewNote(newNote, notes);
    res.send(newNote);
    console.log(notes);
});

module.exports = router;