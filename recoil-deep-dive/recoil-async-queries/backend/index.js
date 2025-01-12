import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const topBar = {
    network: 7,
    jobs: 8,
    messaging: 7,
    notifications: 5
}

app.get('/', (req, res) => {
    res.status(200).json(topBar)
})

app.listen(3000);
