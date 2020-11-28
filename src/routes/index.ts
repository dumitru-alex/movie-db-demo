import { Router } from 'express';

const router = Router();

// Add sub-routes
router.use('/test', (_req, res) => {
  res.status(200).json({ status: '200', message: 'TEST' });
});
export default router;
