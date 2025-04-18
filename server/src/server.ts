import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.json({
    message: "Hello, Express.js!",
    timestamp: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Server running. http://localhost:3000");
});
