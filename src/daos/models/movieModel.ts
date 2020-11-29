import mongoose from 'mongoose';
import { Movie } from '../../doc/Movie';

type MovieDocument = Movie & mongoose.Document

const MovieSchema = new mongoose.Schema({
  IMDb: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['movie', 'series', 'episode'],
  },
});

export default mongoose.model<MovieDocument>('Movie', MovieSchema);
