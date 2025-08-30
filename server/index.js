const express = require('express');
const dotenv = require('dotenv');
const DBConnection = require('./DBConnection');
const Task = require('./models/task');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
DBConnection();
app.post('/tasks', async (req, res) => {
    let tasks = await Task.find();
    for (let i = 0; i < tasks.length; i++) {
        let t = tasks[i]._id;
        await Task.findByIdAndDelete(t);
    }
    for (let i = 0; i < req.body.length; i++) {
        let t = req.body[i];
        let task = new Task({
            id: t.id,
            title: t.title,
            description: t.description,
            x: t.x,
            y: t.y,
            completed: t.completed,
            dueDate: t.dueDate,
            color: t.color
        });
        await task.save();
    }
    res.status(201).json(req.body);
});
app.get('/tasks', async (req, res) => {
    let task = await Task.find();
    res.status(200).json(task);
});
app.put('/tasks/:id', async (req, res) => {
    let task1 = await Task.find({ id: Number(req.params.id) });
    let task = await Task.findByIdAndUpdate(task1[0]._id, req.body, { new: true });
    if (!task) {
        res.status(404).json({ message: 'No Task found' });
    } else {
        res.status(200).json(task);
    }
});
app.delete('/tasks/:id', async (req, res) => {
    let task1 = await Task.find({ id: Number(req.params.id) });
    let task = await Task.findByIdAndDelete(task1[0]._id);
    if (!task) {
        res.status(404).json({ message: 'Task not found' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});