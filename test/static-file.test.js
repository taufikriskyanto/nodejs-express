import express from "express";
import request from "supertest";


const app = express();

// app.use(express.static(__dirname + "/static"))
app.use("/assets",express.static(__dirname + "/assets"))
app.get("/", (req, res)=>{
    res.send("Hello World")
});

test("Static File Unit Test", async ()=>{

    const response = await request(app)
    .get("/");
    console.log(`${response.text}`)
    expect(response.text).toBe("Hello World");
});


// test("Static File Contoh.txt", async ()=>{

//     const response = await request(app)
//     .get("/contoh.txt");
//     console.log(`${response.text}`)
//     expect(response.text).toContain("This is sample text");
// });

test("Static File with prefix accses Contoh.txt", async ()=>{

    const response = await request(app)
    .get("/assets/contoh.txt");
    console.log(`${response.text}`)
    expect(response.text).toContain("This is sample text");
});