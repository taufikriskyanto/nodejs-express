import express, { response } from "express";
import request from "supertest";



const app = express();

app.get('/products/*.json', (request, response) =>{
    response.send(request.originalUrl);
});

//hanya menerima decimal atau angka
app.get('/categories/*(\\d+).json', (request, response) =>{
    response.send(request.originalUrl);
});

test("Route Path Unit Test", async ()=>{

    let response = await request(app)
    .get("/products/taufik.json");
    console.log(`${response.text}`)
    expect(response.text).toBe("/products/taufik.json");

    response = await request(app)
    .get("/products/123.json");
    expect(response.text).toBe("/products/123.json");

    response = await request(app)
    .get("/categories/123.json");
    expect(response.text).toBe("/categories/123.json");

    response = await request(app)
    .get("/categories/salah.json");
    expect(response.status).toBe(404);

});