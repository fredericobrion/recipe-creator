import express from 'express';
import { config } from "dotenv";
import routes from './routes';
import cors from 'cors';

config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(routes);