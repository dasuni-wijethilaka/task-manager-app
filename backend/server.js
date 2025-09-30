const express = require('express'); // to build web server
const cors = require('cors'); // front end to backend requests

const app = express(); // create express application
const PORT = 5000;//define port

// Middleware
app.use(cors()); //enable course for  all routes
app.use(express.json()); // parse json request bodies

// In-memory data store
let tasks = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build an API', completed: false }
];

// Routes
// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);// respont tasks json
});

// POST a new task
app.post('/api/tasks', (req, res) => {
  const newTask = { //  create new task
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask); //push to task array
  res.status(201).json(newTask); // respond 201 with create new task
});

// PUT update a task
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id); // extract id from route
  const task = tasks.find(t => t.id === id); // find id from tasks
  
  if (task) {
    task.completed = req.body.completed; // update task completed status according to request
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// DELETE a task
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tasks = tasks.filter(t => t.id !== id);

  if(tasks) {
    res.json({ message: 'Task deleted' });
  }else {
    res.status(404).json({ message: 'Task not found'})
  }
  
});

app.listen(PORT, () => { // start express server
  console.log(`Server running on http://localhost:${PORT}`);
});