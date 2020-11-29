import mongoose from 'mongoose';

interface Comment extends mongoose.Document {
  author: string,
  context: string
}
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

export default mongoose.model<Comment>('Comment', CommentModel);
