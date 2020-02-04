exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        username: "bizone",
        password: "test",
        name: "Best Business Ever",
        address: "123 Awesome Ave, Awesometown, AR, 00000",
        phone_number: "555-555-5555",
        email: "test@test.com",
        type: 1
      },
      {
        username: "biztwo",
        password: "test",
        name: "Second Best Business Ever",
        address: "489 Somewhereville, Somewhere, USA",
        phone_number: "555-555-5555",
        email: "test@test.com",
        type: 1
      },
      {
        username: "volone",
        password: "test",
        name: "Leslie Knope",
        address: "345 1st Street, Pawnee, IN",
        phone_number: "555-555-5555",
        email: "test@test.com",
        type: 2
      },
      {
        username: "voltwo",
        password: "test",
        name: "Ron Swanson",
        address: "556 Bacon Blvd, Pawnee, IN",
        phone_number: "555-555-5555",
        email: "test@test.com",
        type: 2
      }
    ]);
  });
};
