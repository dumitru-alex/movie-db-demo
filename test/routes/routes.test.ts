import chai from 'chai';
import chaiHttp from 'chai-http';
import { Movie } from '../../src/doc/Movie';
import server from '../../src/Server';
import * as dbHandler from '../db-handler';
import * as MovieService from '../../src/services/Movie';
import { Comment } from '../../src/doc/Comment';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Routes tests', () => {
  before(async () => {
    dbHandler.connectDb();
  });
  afterEach(async () => {
    await dbHandler.clearDb();
  });

  after(async () => {
    await dbHandler.closeDb();
  });
  describe('Test /movies endpoint', function () {
    const movie: Movie = {
      IMDb: 'tt123',
      Genre: 'action',
      Plot: 'asd',
      Title: 'title',
      Type: 'movie',
    };
    it.skip('should GET /api/v1/movies', async () => {
      await MovieService.create(movie);
      // expect(MovieService.create(movie)).to.not.throw;
      chai
        .request(server)
        .get('/api/v1/movies')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).not.to.be.empty;
          expect(res.body.error).to.be.empty;
        });
    });
    it('should POST /api/movies', async () => {
      chai
        .request(server)
        .post('/api/v1/movies')
        .send(movie)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).not.to.be.empty;
          expect(res.body.error).to.be.empty;
        });
    });
  });

  describe('Test /comments endpoint', function () {
    const comment: Comment = { author: 'author', context: 'context' };

    it.skip('should GET /api/v1/comments', async () => {
      // expect(MovieService.create(movie)).to.not.throw;
      chai
        .request(server)
        .get('/api/v1/comments')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
    });
    it('should POST /api/v1/comments', async () => {
      chai
        .request(server)
        .post('/api/v1/comments')
        .send({ comment: comment })
        .end((err, res) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { _id, __v, ...commentResponse } = res.body.comment
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(commentResponse).to.deep.equal(comment)
        });
    });
  });
});
