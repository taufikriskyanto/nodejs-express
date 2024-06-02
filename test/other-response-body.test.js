import express from "express";
import request from "supertest";


const app = express();

const fileName = "sample.txt";

app.get("/", (req, res)=>{
   res.sendFile(__dirname + "/sample/" + fileName);
});

test("Response Body Other Unit Test", async ()=>{


    const response2= await request(app)
    .get("/");
    console.log(`${response2.text}`)
    expect(response2.text).toContain('This is sample text');
});