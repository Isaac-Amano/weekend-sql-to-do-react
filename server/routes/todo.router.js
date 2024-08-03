const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    pool.query('SELECT * FROM tasks ORDER BY id')
        .then(result => res.json(result.rows))
        .catch(err => {
            console.error('Error executing query', err.stack);
            res.sendStatus(400);
        });
});
// POST

router.post('/', (req, res) => {
        const { description } = req.body;
        pool.query('INSERT INTO tasks (description) VALUES ($1)', [description])
            .then(() => res.sendStatus(201))
            .catch(err => {
                console.error('Error executing query', err.stack);
                res.sendStatus(400);
            });
    });

// PUT

// DELETE

module.exports = router;
