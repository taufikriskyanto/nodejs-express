import express from "express";
import request from "supertest";


const app = express();


app.get("/", (req, res)=>{
   res.set({
    "Content" : "AKU GANTENG"
   });
   res.end();
});

test("Response Header Unit Test", async ()=>{


    const response2= await request(app)
    .get("/");
    console.log(`${response2.get("CONTENT")}`)
    expect(response2.get("content")).toBe("AKU GANTENG");
});