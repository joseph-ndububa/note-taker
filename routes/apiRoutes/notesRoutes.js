const router = require("express").Router();
const { notes } = require("../../develop/db/db");

router.get("/notes", (req, res) => {
    let results = notes;

    res.json(results);
    console.log(results);
});

module.exports = router;