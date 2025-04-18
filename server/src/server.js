"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (_, res) => {
    res.json({
        message: "Hello, Express.js!",
        timestamp: new Date().toISOString(),
    });
});
app.listen(3000, () => {
    console.log("Server running. http://localhost:3000");
});
