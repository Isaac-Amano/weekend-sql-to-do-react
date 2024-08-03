const express = require('express');
const app = express();
const todoRouter = require('./routes/todo.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/todo', todoRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});


// // Create a new task
// router.post('/', (req, res) => {
//     const { description } = req.body;
//     pool.query('INSERT INTO tasks (description) VALUES ($1)', [description])
//         .then(() => res.sendStatus(201))
//         .catch(err => {
//             console.error('Error executing query', err.stack);
//             res.sendStatus(400);
//         });
// });