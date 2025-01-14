import express from 'express'
import cors from 'cors'
import { Todos } from './Todos.js';
const app = express();
app.use(cors());

app.use(express.json());

app.get('/alltodos', (req, res) => {
    
    try{
        res.json(Todos)
    }
    catch(e){
        res.json({msg: "Error fetching Todos"})
    }
})
app.get('/notcompletedtodos', (req, res) => {

    try{
        const ans = Todos.filter(x => x.isCompleted == 'false')
        res.json(ans)
    }
    catch(e){
        res.json({msg: "You're all set"})
    }
})
app.get('/search', (req, res) => {

    const title = req.query.title;
    
    try{    
        const ans = Todos.find(x => x.title.toLowerCase() == title.toLowerCase())
        
        res.json(ans)
    }
    catch(e){
        res.json({msg: 'No todo found'})
    }
})

app.listen(3000);


