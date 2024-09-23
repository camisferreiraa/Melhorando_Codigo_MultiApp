import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors({
  origin: '*', 
}));
app.use(express.json());

let tasks = [{ id: 1, text: 'Sample Task' }];
let taskId = 2;

// Rota para buscar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const newTask = { id: taskId++, text: req.body.text };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Rota para excluir uma tarefa pelo ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.sendStatus(204);
});

// Rota para atualizar uma tarefa pelo ID
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const task = tasks.find(task => task.id === parseInt(id));
  if (task) {
    task.text = text;
    res.json(task);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});