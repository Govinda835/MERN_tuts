const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("hello novice!!!!")
    
})
app.get("/home",(req,res)=>{
    res.send("this is home page.")
})

app.listen(3000, ()=>{
    console.log("server is listening at 3000 port")
})

