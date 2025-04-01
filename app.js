const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let tasks = [
    { id: 1, name: 'Tarea 1', description: 'tarea 1' },
    { id: 2, name: 'Tarea 2', description: 'tarea 2' }
];


app.get('/', (req, res) => {
    res.send('tareas test');
});


app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
