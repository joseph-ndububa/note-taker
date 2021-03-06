const router = require("express").Router();
const { notes } = require("../../data/notes");
const { addNewNote, generateId, validateNote, deleteNote } = require('../../lib/notes.js');

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = generateId(notes);
    let newNote = req.body;
    if (validateNote(newNote)) {
        addNewNote(newNote, notes);
        res.send(newNote);
    }
    else {
        res.sendStatus(400);
    }
});

router.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id;
    if (notes.filter(note => note.id == noteId)) {
        deleteNote(noteId, notes);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;