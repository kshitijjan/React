import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());

const todo = [{
    key: 1,
    title: 'Study',
    description: 'Study Custom Hooks'
},{
    key: 2,
    title: 'Play',
    description: 'Play BGMI'
},{
    key: 3,
    title: 'Go to class',
    description: 'Daily'
}]

app.get('/todos', (req, res) => {
    res.json(todo);
})

app.listen(3000);