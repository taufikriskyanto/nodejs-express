import express from "express";
/**
 * This is create application from library express js
 * 1 june 2024
 * by Taufik Riskyanto
 */
const app =  express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});


app.get("/", (req, res)=>{
    res.send("Http Method Get created success")
})

app.post("/", (req, res)=>{
    res.send("Http Method Post created success")
})