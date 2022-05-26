// console.log("Book Store opened!!");

const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// app.use('/',(req,res,next)=>{
//     res.send("This is our starting app");
// })

app.use("/books",router) //localhost:5000/books


mongoose.connect("mongodb+srv://admin:12fvCakc1Hwv58Ew@cluster0.gvcit.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=> console.log("COnnected to database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=> console.log(err));