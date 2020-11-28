import { Router } from 'express';
import { Movies } from '../doc/Movies';
import * as MovieService from '../daos/Movie';

export const router = Router();

router.get('/', async (_req, res) => {
  try {
    const movies: Movies = await MovieService.getAll();

    res.status(200).json({ body: movies, error: '' });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
