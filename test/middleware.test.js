import express from "express";
import request from "supertest";


const logger  =  (req, res, next) =>{
    console.info(`Receive request Method : ${req.method} Path : ${req.originalUrl}`);
    next();
}
const addPoweredHeader = (req, res, next) =>{
    res.set("X-Powered-By", "Taufik Riskyanto");
    next();
}

const apiKeyMiddleware  = (req, res, next) =>{
    if(req.query.apiKey){
        console.info(`Request Query Param Api Key : ${req.query.apiKey}`)
        next();
    }else{
        res.status(401).end();
    }
}


const requestTimeMiddleware  = (req, res, next) =>{
    req.requestTime = Date.now();
    next();
}
const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/hello", (req, res)=>{
    res.send("Hello World")
});


app.get("/time", (req, res)=>{
    res.send(`Hello,  Today Is ${req.requestTime}`)
});

test("Middleware Unit Test", async ()=>{

    const response = await request(app)
    .get("/hello")
    .query({apiKey: "123"})
    expect(response.text).toBe("Hello World");
    expect(response.get("X-Powered-By")).toBe("Taufik Riskyanto");
});

test("Middleware 2 Unit Test", async ()=>{

    const response = await request(app)
    .get("/hello");
    expect(response.status).toBe(401);
});


test("Middleware Request Time Unit Test", async ()=>{

    const response = await request(app)
    .get("/time")
    .query({apiKey: "123"});
    expect(response.text).toContain("Hello,  Today Is");
});