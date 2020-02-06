const request = require("supertest");

const server = require("../api/server.js");

let token;

beforeAll(done => {
  request(server)
    .post("/api/auth/login")
    .send({ username: "thebombadil", password: "test" })
    .end((err, res) => {
      token = res.body.token;
      id = res.body.id;
      done();
    });
});

describe("businesses-route", function() {
  describe.skip("GET /:id", function() {
    it("requires authorization", function() {
      return request(server)
        .get("/api/business/:id")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
  describe.skip("PUT /:id", function() {
    it("resolves with a status of 200", function() {
      return request(server)
        .put(`/api/business/${id}`)
        .send({
          email: "update@test.com"
        })
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe.skip("DELETE /:id", function() {
    it("returns a success message upon deletion", function() {
      return request(server)
        .delete(`/api/business/${id}`)
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.body).toEqual({
            message: "The business was successfully deleted."
          });
        });
    });
  });
});
