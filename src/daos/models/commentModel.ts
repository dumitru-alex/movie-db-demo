import mongoose from 'mongoose';
import { Comment } from '../../doc/Comment';

type CommentDocument = Comment & mongoose.Document;

const CommentModel = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
});

export default mongoose.model<CommentDocument>('Comment', CommentModel);
