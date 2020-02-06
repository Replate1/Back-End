const request = require("supertest");

const authRouter = require("../api/server.js");

describe("auth-router", function() {
  describe.skip("POST /register", function() {
    it("should create/register a new user", function() {
      return request(authRouter)
        .post("/api/auth/register")
        .send({
          username: "thebombadil",
          password: "test",
          name: "Tommy B. Dil",
          address:
            "123 Little House on-the-Withywindle, Old Forest, Middle Earth",
          phone_number: "555-555-5555",
          email: "tommy@middleearth.net",
          type: 1
        })
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should give a 201 status", function() {
      return request(authRouter)
        .post("/api/auth/register")
        .send({
          username: "mrsbombadil",
          password: "test",
          name: "Goldberry Dil",
          address:
            "123 Little House on-the-Withywindle, Old Forest, Middle Earth",
          phone_number: "555-555-5555",
          email: "goldberry@middleearth.net",
          type: 2
        })
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
  describe.skip("POST /login", function() {
    it("should login successfully with message of 200", function() {
      return request(authRouter)
        .post("/api/auth/login")
        .send({
          username: "thebombadil",
          password: "test"
        })
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return a token in the form of a json object", function() {
      return request(authRouter)
        .post("/api/auth/login")
        .send({
          username: "mrsbombadil",
          password: "test"
        })
        .then(res => {
          expect(res.body).toHaveProperty("token");
        });
    });
  });
});
