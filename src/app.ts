import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
    cors({
            origin: "http://localhost:3000"
        })
);

app.listen(4000, () => {
    console.log("server run port 4000")
});