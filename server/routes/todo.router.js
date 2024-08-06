const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('Initiating GET route');
    const queryText = 'SELECT * FROM tasks ORDER BY id;';

    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(200);
        })
        .catch((error) => {
            console.error('error');
            res.sendStatus(400);
        });
});
