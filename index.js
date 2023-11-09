const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res)=>{
  res.send("Hello world")
})

app.get("/ping", (req, res)=>{
  res.send("pong")
})

app.get("/hello", (req, res)=>{
  res.send("everyone")
})

app.listen(PORT,()=>{
  console.log("App listening on port ", PORT)
})
