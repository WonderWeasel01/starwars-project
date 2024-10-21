// backend/controllers/characters.js
const express = require('express');
const router = express.Router();

const characters = []; // Array to store Star Wars characters
let nextId = 1; // Variable to keep track of the next ID

// POST route to add a new character
router.post('/', (req, res) => {
    console.log('Received request:', req.body); // Log anmodningsdata
    const { name, species, age } = req.body;
    if (name && species && age) {
        const newCharacter = { id: nextId++, name, species, age };
        characters.push(newCharacter);
        return res.status(201).json(newCharacter);
    }
    return res.status(400).json({ error: 'All fields are required.' });
});

// GET route to retrieve all characters
router.get('/', (req, res) => {
    res.json(characters);
});

// GET route to retrieve a specific character by ID
router.get('/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (character) {
        return res.json(character);
    }
    return res.status(404).json({ error: 'Character not found.' });
});

module.exports = router;
