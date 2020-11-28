import express from 'express';
import BaseRouter from './routes';

const app = express();

// Add APIs
app.use('/api', BaseRouter);

// Export express instance
export default app;
