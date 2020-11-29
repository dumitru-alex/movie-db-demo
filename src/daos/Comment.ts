import { Comment } from '../doc/Comment';
import CommentModel from './models/commentModel';
import { Document } from 'mongoose';

export const getAll = async (): Promise<Comment[]> => {
  return (await CommentModel.find()).map<Comment>(({author, context}) => {return {author, context}});
};

export const create = async (newComment: Comment): Promise<Document> => {
  return await new CommentModel(newComment).save();
};
