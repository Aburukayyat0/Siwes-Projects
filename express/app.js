const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("view", "express/files")
app.listen(3000);

app.get("/", (req, res)=>{
    res.render("C:/Users/PC/Desktop/SIWES PROJECTS/Node.js coirse/express/files/about");
});

app.get("/about", (req, res)=>{
    res.render("C:/Users/PC/Desktop/SIWES PROJECTS/Node.js coirse/express/files/about");
})
