const request = require("supertest");

const server = require("../api/server.js");

let token;

beforeAll(done => {
  request(server)
    .post("/api/auth/login")
    .send({ username: "mrsbombadil", password: "test" })
    .end((err, res) => {
      token = res.body.token;
      id = res.body.id;
      done();
    });
});

describe("volunteers-route", function() {
  describe.skip("GET /:id", function() {
    it("requires authorization", function() {
      return request(server)
        .get(`/api/volunteer/${id}`)
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe.skip("PUT /:id", function() {
    it("resolves with a status of 200", function() {
      return request(server)
        .put(`/api/volunteer/${id}`)
        .send({
          email: "update@test.com"
        })
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe.skip("DELETE /:id", function() {
    it("returns a success message upon deletion", function() {
      return request(server)
        .delete(`/api/volunteer/${id}`)
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
