const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('Cors')
app.use(cors())
app.use(express.json())

connectToMongo();
app.use(express.json());


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})