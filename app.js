require("dotenv").config()
const express = require("express");

const connectToDatabase = require("./database");
const { Blog } = require("./model/blog.model");

const app = express()
app.use(express.json())
connectToDatabase();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello movies.",
  });
});

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "this is a home page.",
  });
});

app.post("/blog",async(req,res)=>{
    console.log(req.body)
    const {title, subtitle, description, image}= req.body
    const response = await Blog.create({
        title,
        subtitle,
        description,
        image
    })
    res.status(200).json({
        message : "blog API hit successfully..!!"
    })
})


app.listen(process.env.PORT, () => {
  console.log("server is listening at 3000 port....!!!!");
});
