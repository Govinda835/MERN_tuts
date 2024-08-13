// const express = require('express')
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.get("/home/",(req,res)=>
// {
//     res.send("this is the home page of the server.")
// })

// app.listen(400,()=>
// {
//     console.log("is the server working or not?")
// })

// const express = require('express')
// const app = express()
// app.get("/",(req,res)=>{
//     res.send("hello everyone.")
// })
// app.listen(450,()=>
// {
//     console.log("is this server working or not?")
// // })

// const express = require('express')
// const app = express()
// app.get("/",(req,res)=>{
//     res.send("Hello World, my name is govinda chaudhary.")
// })
// app.get()
// app.listen(4500,()=>
// {
//     console.log("my name is govinda chaudhary.")
// })


const express = require('express')
const app = express()
app.get("/",(req,res)=>
{
    res.json({
        message:"hello mother fuckers."})
})
app.get("/home",(req,res)=>
{
    res.json({
        message: "This is home page of the sever 3456."
    })
})
app.listen(3456,()=>{
    console.log("is our 3456 server working or not?")
})


