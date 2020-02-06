const request = require("supertest");

const server = require("../api/server.js");

let token;

// username & password for volunteers testing

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

//username and password for business testing

// beforeAll(done => {
//   request(server)
//     .post("/api/auth/login")
//     .send({ username: "thebombadil", password: "test" })
//     .end((err, res) => {
//       token = res.body.token;
//       id = res.body.id;
//       done();
//     });
// });

describe("pickups-route", function() {
  describe.skip("POST /", function() {
    it("business should create a new pickup request", function() {
      return request(server)
        .post("/api/pickups/")
        .send({
          food_type: "almonds",
          amount: "50",
          pickup_time: "59098908",
          complete: 0,
          business_id: 1
        })
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe.skip("PUT /:id", function() {
    it("edits a pickup request", function() {
      return request(server)
        .put("/api/pickups/4")
        .send({
          food_type: "t-rex meat",
          amount: "101",
          pickup_time: "80808008",
          complete: 0,
          business_id: 2
        })
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.body).toEqual({
            message: "request was updated"
          });
        });
    });
  });
  describe.skip("GET /business/:id", function() {
    it("fetches a list of requests per business", function() {
      return request(server)
        .get(`/api/pickups/business/${id}`)
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe.skip("DELETE /:id", function() {
    it("deletes a pickup request", function() {
      return request(server)
        .delete("/api/pickups/5")
        .auth("thebombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
  describe.skip("GET /open-requests", function() {
    it("returns with a status of 200 if successful", function() {
      return request(server)
        .get("/api/pickups/open-requests")
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe.skip("GET /:id", function() {
    it("returns a pickup request object by id", function() {
      return request(server)
        .get("/api/pickups/1")
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.body).toEqual({
            id: 1,
            food_type: "rye bread",
            amount: 5,
            pickup_time: 200100100,
            complete: 0,
            business_id: 1,
            volunteer_id: 3
          });
        });
    });
  });
  describe.skip("GET /volunteer/:id", function() {
    it("returns a 201 status on success", function() {
      return request(server)
        .get(`/api/pickups/volunteer/${id}`)
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe.skip("PUT /:id", function() {
    it("returns a success message upon updating", function() {
      return request(server)
        .put("/api/pickups/4")
        .send({ volunteer_id: 3 })
        .auth("mrsbombadil", "test")
        .set("Authorization", token)
        .then(res => {
          expect(res.body).toEqual({ message: "request was updated" });
        });
    });
  });
});
