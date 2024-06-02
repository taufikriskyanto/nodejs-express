import express from "express";
import request from "supertest";


const app = express();

const middlewareError = (error, request, response, next) =>{
    response.status(500).send(`Terjadi Error: ${error.message}`);
}

app.get("/", (req, res)=>{
    throw new Error("Ups")
});

app.use(middlewareError);

test("Response Url Unit Test", async ()=>{
    const response = await request(app)
    .get("/");
    expect(response.status).toBe(500);
    expect(response.text).toBe("Terjadi Error: Ups");
});