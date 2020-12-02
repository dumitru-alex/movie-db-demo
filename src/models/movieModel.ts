import mongoose from 'mongoose';
import { Movie } from '../doc/Movie';

type MovieDocument = Movie & mongoose.Document;

const MovieSchema = new mongoose.Schema({
  IMDb: {
    type: String,
    required: true,
    unique: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
    enum: ['movie', 'series', 'episode'],
  },
  Genre: {
    type: String,
    required: true,
  },
  Plot: {
    type: String,
    required: true,
  },
});

export default mongoose.model<MovieDocument>('Movie', MovieSchema);
