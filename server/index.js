const express = require('express');
const dotenv=require('dotenv');
const  DBConnection=require('./DBConnection');
const Task = require('./models/task');
const cors = require('cors');

// Initialize the Express application
const app = express();
app.use(express.json());
app.use(cors());
// Load environment variables and establish database connection
dotenv.config();
DBConnection();
// Define a route to create a new task
app.post('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        for (let i = 0; i < tasks.length; i++) {
            const t = tasks[i]._id;
            await Task.findByIdAndDelete(t);
        }
        for(let i=0;i<req.body.length;i++) {
            const t = req.body[i];
            const task = new Task({
                id: t.id,
                title: t.title || 'New Task',
                description: t.description || '',
                x: t.x || 0,
                y: t.y || 0,
                completed: t.completed || false,
                dueDate: t.dueDate || new Date(),
                color: t.color || 'white'
            });
            await task.save();
        }
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
    }
});

// Define a route to get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
    }
});

// Define a route to update a task by ID
app.put('/tasks/:id', async (req, res) => {
    try {
        const task1= await Task.find({ id: Number(req.params.id) });
        if (task1.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        const task = await Task.findByIdAndUpdate(task1[0]._id, req.body, { new: true });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating task' });
    }
});

// Define a route to delete a task by ID
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task1= await Task.find({ id: Number(req.params.id) });
        if (task1.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        const task = await Task.findByIdAndDelete(task1[0]._id);
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        } 
        else {
            res.status(200).json({ message: 'Task deleted successfully' });
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting task' });
    }
});

// Start the server
const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
