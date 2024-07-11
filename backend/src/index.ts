import express from "express";
import { config } from "dotenv";
import routes from "./routes";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

config();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(limiter);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(routes);
