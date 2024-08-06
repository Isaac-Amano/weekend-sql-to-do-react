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
    console.log('req.body:', req.body);

    const { description } = req.body;
    
    const queryText = `
      INSERT INTO "tasks" ("description") 
      VALUES ($1);
    `;
    pool.query(queryText, [description])
      .then(result => {
        console.log(result);
        res.sendStatus(201); 
      })
      .catch(error => {
        console.error('Error');
        res.sendStatus(400); 
      });
});


//Delete route

router.delete('/:id', (req, res) => {
    console.log('req.params:', req.params);

    const taskId = req.params.id;

    const queryText = `
      DELETE FROM "tasks" 
      WHERE "id" = $1;
    `;
    pool.query(queryText, [taskId])
      .then(result => {
        console.log(result);
        res.sendStatus(200); 
      })
      .catch(error => {
        console.error('Error');
        res.sendStatus(500); 
      });
});

module.exports = router;


