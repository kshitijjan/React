import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

const todo = [{
    id: 1,
    title: 'Play ',
    description: 'Play games'
},{
    id: 2,
    title: 'Study ',
    description: 'Study Anything'
}]

app.get('/todo', (req, res) => {
    const id = req.query.id;
    console.log(id);

    try{
        const returnTodo = todo.find(x => x.id == id);
        res.json(returnTodo)
    }
    catch(e){
        res.json({msg: 'No todo found'})
    }
})

app.listen(3000)