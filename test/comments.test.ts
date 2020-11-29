import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/Server';
import * as CommentService from '../src/daos/Comment';
import sinon from 'sinon';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Test /comments endpoint', function () {
  it.skip('should GET /api/comments', async function (done) {
    sinon
      .stub(CommentService, 'getAll')
      .resolves([{ author: 'Author', context: 'Context' }]);
    const res = await chai.request(server).get('/api/comments');

    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.error).to.be.empty;
    done();

    sinon.restore();
  });
  it.skip('should POST /api/comments', async function () {
    const res = await chai
      .request(server)
      .post('/api/comments')
      .send({
        comment: {
          author: 'Author',
          context: 'context',
        },
      });
    expect(res.status).to.equal(201);
    expect(res.body).not.to.be.empty;
    expect(res.body.error).to.be.empty;
  });
});
