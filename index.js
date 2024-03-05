import "dotenv/config";
import express from "express";
import allRoutes from "./routes/index.route.js";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/v1", allRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
