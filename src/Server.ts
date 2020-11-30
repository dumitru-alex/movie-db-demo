import express from 'express';
import BaseRouter from './routes';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Add APIs
app.use('/api', BaseRouter);

// Export express instance
export default app;
