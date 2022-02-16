const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://tauhidsaif26748:Mohd0000@inotebook.jbrgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 const connectToMongo =()=>{
     mongoose.connect(process.env.MONGODB_URI || mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, ()=>{
         console.log("connected to mongo successfully")
     })
 }

 module.exports = connectToMongo;