import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
   res.redirect('to/next-page');
});

test("Response Header Unit Test", async ()=>{


    const response= await request(app)
    .get("/");
    console.log(`${response.text}`)

    expect(response.status).toBe(302);
    expect(response.get('Location')).toContain('to/next-page');
});