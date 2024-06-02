import express, { query, response } from "express";
import request from "supertest";



const app = express();
const router = express.Router();


const addPoweredHeader = (req, res, next) =>{
    res.set("X-Powered-By", "Taufik Riskyanto");
    next();
}

router.use((request,response, next)=>{
    console.info(`Receive request : ${request.originalUrl}`);
    next();
});
router.use(addPoweredHeader);

router.get("/feature/a", (request,response)=>{
    response.send("Feature A");
})

test("Route Unit Test", async ()=>{

    let response = await request(app)
    .get("/feature/a");
    expect(response.status).toBe(404);

});


test("Route Path with Parameter Unit Test", async ()=>{

    //setiap kali membuat router harus ditambahkan ke dalam app
    app.use(router);
    let response = await request(app)
    .get("/feature/a");
    console.log(`${response.text}`)
    expect(response.text).toBe("Feature A");

});