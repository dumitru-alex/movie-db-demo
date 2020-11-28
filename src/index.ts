import * as dotenv from 'dotenv';
import app from './Server';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
