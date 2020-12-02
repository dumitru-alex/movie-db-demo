import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/Server';

const expect = chai.expect;
chai.use(chaiHttp);

describe.skip('Test /movies endpoint', function () {
  it('should GET /api/movies', async function () {
    const res = await chai.request(server).get('/api/movies');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.error).to.be.empty;
  });
  // TODO: need to fix this test
  it.skip('should POST /api/movies', async function () {
    const res = await chai
      .request(server)
      .post('/api/movies')
      .send({
        movie: {
          IMDb: '1235',
          title: 'Die Hard 5',
          plot: 'hard to kill 5',
          type: 'movie',
        },
      });
    expect(res.status).to.equal(201);
    expect(res.body).not.to.be.empty;
    expect(res.body.error).to.be.empty;
  });
});
