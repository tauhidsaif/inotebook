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

// Step 1:
app.use(express.static(path.resolve(__dirname, "../build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, '../build', "index.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})