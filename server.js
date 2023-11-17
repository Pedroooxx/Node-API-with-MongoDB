require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const tarefaRoute = require('./routes/tarefaRoute');
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require('cors')

const app = express()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

var corsOptions = {
    origin: 'http://exemple.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tarefas', tarefaRoute);

app.get('/', (req, res) => {
    res.send("Hello Node API")
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL).
then(() => {
    console.log("Conected to MongoDB")
    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT} [...]`)
    });
}).catch((error) => {
    console.log(error)
})