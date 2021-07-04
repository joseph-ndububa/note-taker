const router = require("express").Router();
const { notes } = require("../../data/notes");
const fs = require('fs');
const { addNewNote, generateId, validateNote } = require('../../lib/notes.js');

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = generateId(notes);
    let newNote = req.body;
    console.log(newNote);
    if (validateNote(newNote)) {
        addNewNote(newNote, notes);
        res.send(newNote);
    }
});

module.exports = router;