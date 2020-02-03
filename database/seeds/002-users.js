exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "bizone",
          password: "test",
          phone_number: "555-555-5555",
          email: "test@test.com",
          type: 1
        },
        {
          username: "biztwo",
          password: "test",
          phone_number: "555-555-5555",
          email: "test@test.com",
          type: 1
        },
        {
          username: "volone",
          password: "test",
          phone_number: "555-555-5555",
          email: "test@test.com",
          type: 2
        },
        {
          username: "voltwo",
          password: "test",
          phone_number: "555-555-5555",
          email: "test@test.com",
          type: 2
        }
      ]);
    });
};
