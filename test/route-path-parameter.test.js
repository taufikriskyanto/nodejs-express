import express, { query, response } from "express";
import request from "supertest";



const app = express();

app.get('/products/:id', (request, response) =>{
    console.log(`Request Original Url : ${request.originalUrl}`);
    response.send(`Product : ${request.params.id}`);
});

//hanya menerima decimal atau angka
app.get('/categories/:id(\\d+)', (request, response) =>{
    response.send(`Categories: ${request.params.id}`);
});

test("Route Path with Parameter Unit Test", async ()=>{

    let response = await request(app)
    .get("/products/taufik");
    console.log(`${response.text}`)
    expect(response.text).toBe("Product : taufik");

    response = await request(app)
    .get("/products/123");
    expect(response.text).toBe("Product : 123");

    response = await request(app)
    .get("/categories/123");
    expect(response.text).toBe("Categories: 123");

    response = await request(app)
    .get("/categories/salah.json");
    expect(response.status).toBe(404);

});