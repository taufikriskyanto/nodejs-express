import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
   res.set({
    "Content-type" : 'text/html'
   });
   res.send('<html> <head> <title> HELLO WORLD </title> </head> </html>')
});

test("Response Header Unit Test", async ()=>{


    const response2= await request(app)
    .get("/");
    console.log(`${response2.text}`)

    expect(response2.get('Content-type')).toContain('text/html');
    expect(response2.text).toBe('<html> <head> <title> HELLO WORLD </title> </head> </html>');
});