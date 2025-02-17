const express = require('express')
const cors = require('cors')
const app = express();
const mainRouter = require('./routes/mainRouter')

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter)

app.listen(3000)

/*

    /api/v1/user/signup
    /api/v1/user/signin
    /api/v1/user/account

    /api/v1/account/transferMoney
    /api/v1/account/balance


*/