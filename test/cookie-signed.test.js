import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser("sAyMA^)WN#CIbatcXPk^T+eaRD+ex8%^wFSqCmc23SEn$FyJf8tRQdu%&cBfzy)j"))



app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed: true});
    res.send(`Hello ${name}`);
    console.info(`Cookie : ${res.cookie}`)
});


test("Test Cookie Read", async () => {
    const response = await request(app).get("/")
        .set("Cookie", "Login=s%3AEko.R5%2B2S%2ByB%2FuURM%2BNcHQ60QBXMOT7OYPzcwJP2sdPVcKc; Path=/");
    expect(response.text).toBe("Hello Eko");
});

test("Test Cookie Write", async () => {
    const response = await request(app).post("/login")
        .send({name: "Eko"});
    expect(response.get("Set-Cookie").toString()).toBe("Login=s%3AEko.R5%2B2S%2ByB%2FuURM%2BNcHQ60QBXMOT7OYPzcwJP2sdPVcKc; Path=/");
    expect(response.text).toBe("Hello Eko");
});