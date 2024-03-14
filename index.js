import "dotenv/config";
import express from "express";
import routes from "./routes/v1/index.route.js";
import { swaggerDocs as V1SwaggerDocs } from "./swagger/v1/swagger.js";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
  V1SwaggerDocs(app, PORT);
});
