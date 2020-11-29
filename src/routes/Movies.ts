import { Router } from 'express';
import * as MovieService from '../daos/Movie';

export const router = Router();

router.get('/', async (_req, res) => {
  try {
    const movies = await MovieService.getAll();
    return res.status(200).json({ body: movies });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const document = await MovieService.create(req.body.movie);
    return res.status(201).json({ body: document });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
