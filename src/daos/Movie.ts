import { Movie } from '../doc/Movie';
import MovieModel from './models/movieModel';
import { Document } from 'mongoose';

export const getAll = async (): Promise<Movie[]> =>
  (await MovieModel.find()).map<Movie>(({ IMDb, Title, Type, Genre, Plot }) => {
    return { IMDb, Title, Type, Genre, Plot };
  });
export const create = async (newMovie: Movie): Promise<Document> =>
  new MovieModel(newMovie).save();
