import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/Server';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Test /movies endpoint', function () {
  it('should GET /api/movies', async function () {
    const res = await chai.request(server).get('/api/movies');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.error).to.be.empty;
  });
});
