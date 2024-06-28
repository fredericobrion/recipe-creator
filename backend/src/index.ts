import express from 'express';
import { config } from "dotenv";
import routes from './routes';

config();

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(routes);