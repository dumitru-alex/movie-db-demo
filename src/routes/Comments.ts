import { Router } from 'express';
import * as CommentService from '../daos/Comment';

export const router = Router();

router.get('/', async (_req, res) => {
  try {
    const comments = await CommentService.getAll();
    res.status(200).json({ body: comments });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const document = await CommentService.create(req.body.comment);
    return res.status(201).json({ body: document });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
