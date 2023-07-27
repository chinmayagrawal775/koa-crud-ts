import { expect, should } from 'chai';
import * as request from 'supertest';
import chaiHttp from 'chai-http';
import app  from '../app.ts';

// should()
const arr = [1,2,3]
chai.use(chaiHttp)

describe("GET /courses", function () {
  it("returns all courses", async function () {
    const response = chai.request(app).get("/courses");
    // const response = await request(app).get("/courses");
    expect(response.status).to.eql(200);

    // expect(arr).of.be.a('array');
    // arr.should.be.a('array');

  });
});