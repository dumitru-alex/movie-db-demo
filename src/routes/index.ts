import { Router } from 'express';
import { router as movieRouter } from './Movies';

const router = Router();

// Add sub-routes
router.use('/movies', movieRouter);

export default router;
