const express = require('express');
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/notes").get((req,res) =>{
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;

 