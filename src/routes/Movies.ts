import { Router } from 'express';
import * as MovieService from '../services/Movie';
import dotenv from 'dotenv';
import { Movie } from '../doc/Movie';
import axios from 'axios';

dotenv.config();

export const router = Router();

router.get('/', async (_req, res) => {
  try {
    const movies = await MovieService.getAll();
    return res.status(200).json({ movies: movies });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.movie.IMDb)
    return res.status(400).send('Required parameter missing: IMDb');
  let movie = req.body.movie;
  // TODO move this out
  if (!instanceOfMovie(movie)) {
    const omdbResponse = await axios.get(
      `http://www.omdbapi.com/?i=${movie.IMDb}&apikey=${process.env.OMDB_API_KEY}`
    );

    if (omdbResponse.data.Response === 'False') {
      return res.status(400).send(omdbResponse.data.Error);
    }
    movie = { ...omdbResponse.data, ...movie };
  }
  try {
    const document = await MovieService.create(movie);
    return res.status(201).json({ movie: document });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

// Lazy validation of req.body
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const instanceOfMovie = (obj: any): obj is Movie => {
  return (
    'IMDb' in obj &&
    'Title' in obj &&
    'Type' in obj &&
    'Genre' in obj &&
    'Plot' in obj &&
    Object.keys(obj).length == 5
  );
};
