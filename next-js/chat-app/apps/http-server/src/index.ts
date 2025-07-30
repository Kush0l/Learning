import express from 'express';

const app = express();

app.get("/signup", (req,res)=>{
  res.send("hi");
})
app.get("/signin", (req,res)=>{
  res.send("hi");
})
app.get("/chat", (req,res)=>{
  res.send("hello");
})

app.listen(5000);