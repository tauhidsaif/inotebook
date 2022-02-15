const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://tauhidsaif26748:<password>@inotebook.jbrgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 const connectToMongo =()=>{
     mongoose.connect(mongoURI, ()=>{
         console.log("connected to mongo successfully")
     })
 }

 module.exports = connectToMongo;