const fs = require('fs');
const path = require('path');

function addNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return body;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    if (!note.id || typeof note.id !== 'string') {
        return false;
    }
    return true;
}

function generateId(notes) {
    if (notes.length == 0) {
        return "1";
    }
    else {
        let lastId = Number(notes[notes.length - 1].id);
        let newId = lastId + 1;
        return newId.toString();
    }
}

function deleteNote(id, notes) {
    for (i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
}

module.exports = { addNewNote, generateId, validateNote, deleteNote };
