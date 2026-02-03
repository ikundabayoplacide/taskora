import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { setupSwagger } from "./config/swagger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Setup Swagger documentation
setupSwagger(app);

// API routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
