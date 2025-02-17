const express = require('express')
const app = express();

const  todos = [{
    title: 'Study',
    description: 'Study Hard'
},{
    title: "Play",
    description: 'Play Hard'
}]

app.get('/todos', (req, res) => {

    res.json(todos)
})

app.listen(3000)