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
          phoneNumber: "555-555-5555",
          type: 1
        },
        {
          username: "biztwo",
          password: "test",
          phoneNumber: "555-555-5555",
          type: 1
        },
        {
          username: "volone",
          password: "test",
          phoneNumber: "555-555-5555",
          type: 2
        },
        {
          username: "voltwo",
          password: "test",
          phoneNumber: "555-555-5555",
          type: 2
        }
      ]);
    });
};
