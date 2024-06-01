import express from "express";
import request from "supertest";

const app =  express();
app.get("/", (req, res)=>{
    res.send("Hello World");
});


app.post("/", (req, res)=>{
    res.send("Hello World");
});

test("Hello World", async ()=>{
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
})

test("Hello World 2", async ()=>{
    const response = await request(app).post("/");
    expect(response.text).toBe("Hello World");
})