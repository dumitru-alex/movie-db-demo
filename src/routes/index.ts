import { Router } from 'express';
import { router as movieRouter } from './Movies';
import { router as commentRouter } from './Comments';

const router = Router();

// Add sub-routes
router.use('/movies', movieRouter);
router.use('/comments', commentRouter);

export default router;
