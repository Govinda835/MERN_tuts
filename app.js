const express = require('express')
const connectToDatabase = require('./database')
const app = express()

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

app.listen(3000, ()=>{
    console.log("server is listening at 3000 port")
})

