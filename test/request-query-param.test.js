import express from "express";
import request from "supertest";


const app = express();


app.get("/hello/world", (req, res)=>{
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
});

test("Request Url Unit Test", async ()=>{

    const response = await request(app)
    .get("/hello/world")
    .query({firstName: 'Taufik', lastName: 'Riskyanto'});
    console.log(`${response.request}`)
    expect(response.text).toBe("Hello Taufik Riskyanto")
});