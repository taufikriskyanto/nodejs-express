import express, { query, response } from "express";
import request from "supertest";



const app = express();

app.route("/products")
    .get((request, response) =>{
        response.send("Success Get")
    })
    .post((request, response)=>{
        response.send("Success Post")
    })
    .put((request, response)=>{
        response.send("Success Put")
    })

test("Route Path with Parameter Unit Test", async ()=>{

    let response = await request(app)
    .get("/products");
    console.log(`${response.text}`)
    expect(response.text).toBe("Success Get");

    response = await request(app)
    .post("/products");
    expect(response.text).toBe("Success Post");

    response = await request(app)
    .put("/products");
    expect(response.text).toBe("Success Put");

});