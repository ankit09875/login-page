const express = require('express');
const app = express();
app.get("", (req,res) => {
res.send("hi welcome to my home channel");
});
app.get("/about", (req,res) => {
  res.send("hi welcome to my about channel");
    });
    app.listen(5000);