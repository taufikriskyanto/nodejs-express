import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
    if(req.query.name){
        res.status(200).send(`Hello ${req.query.name}`)
    }
    res.status(400).send("Hello World")
});

test("Response Status Unit Test", async ()=>{

    const response = await request(app)
    .get("/")
    .query({name: 'Taufik'});
    console.log(`${response.status}`)
    expect(response.status).toBe(200);


    const response2= await request(app)
    .get("/");
    console.log(`${response2.status}`)
    expect(response2.status).toBe(400);
});