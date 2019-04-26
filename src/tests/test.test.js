const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('Home route should return expected results', t => {
    request(app)
        .get('/')
        .expect(200)
        .expect('content-type', /html/)
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});