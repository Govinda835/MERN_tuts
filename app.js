require('dotenv').config()
const express = require('express')
// const connectdb = require('./database/index.js')
const connectToDatabase = require('./database')

const app = express()
// connectdb()
connectToDatabase()
app.get("/",(req,res)=>{
    res.json({
       message: ("hello movies.")
})
    
})

app.get("/home",(req,res)=>{
    res.json({
        message: ("this is a home page.")
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("server is listening at 3000 port.....!!!!")
})



