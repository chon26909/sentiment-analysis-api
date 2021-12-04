import express from "express";
import cors from "cors";
import getSentiment from "./nlp";

const app = express();

app.use(express.json());

app.use(
    cors({
            origin: "http://localhost:3000"
        })
);

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("server run port 4000")
});

app.get("/health", (req,res) => {
    res.send(200)
})

app.post("/api/sentiment", (req, res) => {

    const { data } = req.body;

    const sentiment = getSentiment(data);

    return res.send({sentiment});
})