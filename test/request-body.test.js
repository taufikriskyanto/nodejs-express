import express, { query, response } from "express";
import request from "supertest";



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/json', (request, response)=>{
    const name = request.body.name;
    response.json({
        hello: `Hello ${name}`
    })
})

app.post('/form', (request, response)=>{
    const name = request.body.name;
    response.json({
        hello: `Hello ${name}`
    })
}) 
test("Request Body Json Unit Test", async ()=>{

    let response = await request(app)
    .get("/json")
    .set("Content-type", "application/json")
    .send({name: "World"})
    expect(response.body).toEqual({
        hello: "Hello World"
    });

});


test("Request Body Form", async ()=>{

    const response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=World");
    expect(response.body).toEqual({
        hello: "Hello World"
    });

});