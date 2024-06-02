import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
    res.send("Hello World")
});

test("Response Url Unit Test", async ()=>{

    const response = await request(app)
    .get("/");
    console.log(`${response.text}`)
    expect(response.text).toBe("Hello World");
});