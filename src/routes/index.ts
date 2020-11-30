import { Router } from 'express';
import { router as movieRouter } from './Movies';
import { router as commentRouter } from './Comments';

const router = Router();

// Add sub-routes
router.use('/v1/movies', movieRouter);
router.use('/v1/comments', commentRouter);

export default router;
