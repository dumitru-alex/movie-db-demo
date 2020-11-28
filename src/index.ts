import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT, 10);

const app = express();


app.get('/', (req, res) => res.send("Initial Server"));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});