var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Check whether id is present
it('check whether user id is present', done => {    

    chai.request('http://localhost:9000/')
        .get('api/users/5c4af4a1c0d9f9228832f3ae')        
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
})