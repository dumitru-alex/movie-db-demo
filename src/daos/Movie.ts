import { Movie } from '../doc/Movie';
import MovieModel from './models/movieModel';
import { Document } from 'mongoose';

export const getAll = async (): Promise<Document[]> => {
  return await MovieModel.find();
};

export const create = (newMovie: Movie): Document => {
  return new MovieModel(newMovie);
};
