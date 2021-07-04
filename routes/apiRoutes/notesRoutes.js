const router = require("express").Router();
const { notes } = require("../../data/notes");
const fs = require('fs');
const { addNewNote, generateId, validateNote, deleteNote } = require('../../lib/notes.js');

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

router.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id;
    deleteNote(noteId, notes);
    res.sendStatus(200);
});

module.exports = router;