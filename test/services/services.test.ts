import chai from 'chai';
import * as CommentService from '../../src/services/Comment';
import * as MovieService from '../../src/services/Movie';
import * as dbHandler from '../db-handler';
import { Comment } from '../../src/doc/Comment';
import { Movie } from '../../src/doc/Movie';

const expect = chai.expect;

describe('Service tests', () => {
  before(async () => {
    dbHandler.connectDb();
  });

  afterEach(async () => {
    await dbHandler.clearDb();
  });

  after(async () => {
    await dbHandler.closeDb();
  });
  describe('Comments service', () => {
    const comment: Comment = { author: 'author', context: 'context' };

    it('can create comment', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, __v, ...commentResponse } = (
        await CommentService.create(comment)
      ).toJSON();
      expect(commentResponse).to.deep.equal(comment);
    });
    it('can retrieve comments', async () => {
      expect(CommentService.create(comment)).to.not.throw;
      const commentResponse = await CommentService.getAll();
      expect(commentResponse).to.deep.equal([comment]);
    });
  });
  describe('Movies service', () => {
    const movie: Movie = {
      IMDb: 'tt123',
      Genre: 'action',
      Plot: 'asd',
      Title: 'title',
      Type: 'movie',
    };
    it('can create movie', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, __v, ...movieResponse } = (
        await MovieService.create(movie)
      ).toJSON();
      expect(movieResponse).to.deep.equal(movie);
    });
    it('can retrieve movies', async () => {
      expect(MovieService.create(movie)).to.not.throw;
      const movieResponse = await MovieService.getAll();
      expect(movieResponse).to.deep.equal([movie]);
    });
  });
});
