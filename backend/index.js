const connectToMongo = require('./db');
const express = require('express')
const app = express()
const path = require("path");


const port =  5000;
var cors = require('Cors')
app.use(cors())
app.use(express.json())

connectToMongo();
app.use(express.json());


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.use(express.static(path.join(__dirname, '../build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})