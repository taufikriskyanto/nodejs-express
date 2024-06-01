import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
    res.send(`Hello ${req.get("accept")}`)
});

test("Request Url Unit Test", async ()=>{

    const response = await request(app)
    .get("/")
    .set('Accept', 'text/plain');
    console.log(`${response.request}`)
    expect(response.text).toBe("Hello text/plain")
});