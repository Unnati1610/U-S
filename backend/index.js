const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const route=require('./Routes/route')

app.use(express.json());
app.use(cors());
app.use('/admin',route)
mongoose.connect("mongodb://localhost:27017").then(res=>console.log("conneceted to DB")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))