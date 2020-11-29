import mongoose from 'mongoose';

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

export default mongoose.model('Movie', MovieSchema);
