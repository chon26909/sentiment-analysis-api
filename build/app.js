"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nlp_1 = __importDefault(require("./nlp"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000"
}));
const port = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log("server run port 4000");
});
app.get("/health", (req, res) => {
    res.send(200);
});
app.post("/api/sentiment", (req, res) => {
    const { data } = req.body;
    const sentiment = (0, nlp_1.default)(data);
    return res.send({ sentiment });
});
