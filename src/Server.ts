import express from 'express';
import BaseRouter from './routes';

const app = express();

app.use(express.json());

// Add APIs
app.use('/api', BaseRouter);

// Export express instance
export default app;
