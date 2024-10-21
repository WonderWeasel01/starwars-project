// backend/controllers/submit.js
const express = require('express');
const router = express.Router();

const characters = []; // Array to store characters
let nextId = 1; // Variable to keep track of the next ID

// POST route to add a new character
router.post('/', (req, res) => {
    const { name, species, age } = req.body; // Opdateret til at matche inputfelterne
    if (name && species && age) {
        const newCharacter = { id: nextId++, name, species, age }; // Tilføjet id
        characters.push(newCharacter);
        return res.status(201).json(newCharacter);
    }
    return res.status(400).json({ error: 'All fields are required.' });
});

module.exports = router;
