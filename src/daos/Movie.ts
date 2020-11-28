import { Movie } from '../doc/Movie';
import { Movies } from '../doc/Movies';

// TODO: In memory storage for now. To be replaced by DB
const movies: Movies = {
  1: {
    id: 1,
    IMDb: '123',
    title: 'Die Hard',
    plot: 'full',
    type: 'movie',
  },
  2: {
    id: 2,
    IMDb: '1234',
    title: 'Die Hard 2',
    plot: 'short',
    type: 'series',
  },
  3: {
    id: 3,
    IMDb: '12345',
    title: 'Die Hard 3',
    plot: 'full',
    type: 'episode',
  },
};

export const getAll = async (): Promise<Movies> => {
  return movies;
};

export const create = async (newMovie: Movie): Promise<void> => {
  const id = Object.keys(movies).length + 1;
  movies[id] = {
    ...newMovie,
    id,
  };
};
