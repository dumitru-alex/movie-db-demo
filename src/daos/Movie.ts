import { Movie } from '../doc/Movie';
import MovieModel from './models/movieModel';
import { Document } from 'mongoose';

export const getAll = async (): Promise<Movie[]> =>
  (await MovieModel.find()).map<Movie>(({ IMDb, title, type }) => {
    return { IMDb, title, type };
  });
export const create = async (newMovie: Movie): Promise<Document> =>
  new MovieModel(newMovie).save();
