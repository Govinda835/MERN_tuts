const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("Say hello if the server is working.")

})
app.get("/home/",(req,res)=>{
    res.send("hello server users.")
})

app.listen(3000,()=>{

    console.log("is this server working?")
})
