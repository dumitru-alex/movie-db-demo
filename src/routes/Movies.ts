import { Router } from 'express';
import * as MovieService from '../daos/Movie';

export const router = Router();

router.get('/', async (_req, res) => {
  try {
    const movies = await MovieService.getAll();

    res.status(200).json({ body: movies, error: '' });
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post('/', async (req, res) => {
  if (!req.body) {
    res.status(400).json({message: 'Request body is missing.'});
  }
  try {
    await MovieService.create(req.body.movie).save((err, document) => {
      if (err) {
        res.status(500).send(err.message);
      }
      res.status(201).json({ body: document, error: '' });
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});
