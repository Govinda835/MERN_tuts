require("dotenv").config()
const express = require("express");

const {connectToDatabase} = require("./database");
const { Blog } = require("./model/blog.model");

const app = express()
app.use(express.json())
connectToDatabase();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello movies.....",
  });
});

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "this is a home page.",
  });
});

app.post("/blog",async(req,res)=>{ 
    console.log(req.body)  // return the data in the form of array 
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

app.get("/blog/:id", async(req,res)=>{
  const id = req.params.id 
  const blog = await Blog.findById(id)  // return the data in the form of obkject

  if(!blog)
  {
    return res.status(404).json({
    message: "no data found .... .!!!"
    }) 
  
  }
  res.status(200).json({
    message : "fetched successfully...!!!"
  })
})

app.delete("/blog/:id"), async(req,res)=>{
const id = req.params.id
 await Blog.findByIdAndDelete(id)
res.status(200).json({
  message : "Blog deleted successfully...!!!"
})
}

app.patch("/blog/:id",(req,res)=>{

})


app.listen(process.env.PORT, () => {
  console.log("server is listening at 3000 port....!!!!");
});
