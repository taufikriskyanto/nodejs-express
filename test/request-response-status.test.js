import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
    res.send("Hello World")
});

test("Request Url Unit Test", async ()=>{

    const response = await request(app)
    .get("/");
    console.log(`${response.status}`)
    expect(response.status).toBe(200);
});