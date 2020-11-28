import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/Server';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Tests', function () {
  it('should GET /api/test', async function () {
    const res = await chai.request(server).get('/api/test');
    expect(res.status).to.equal(200);
  });
});
