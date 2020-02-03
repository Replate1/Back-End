exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("profiles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("profiles").insert([
        {
          name: "Best Business Ever",
          address: "123 Awesome Ave, Awesometown, AR, 00000",
          user_id: 1
        },
        {
          name: "Worst Business Ever",
          address: "456 Loser Ln, Loserville, LA, 00000",
          user_id: 2
        },
        { name: "Leslie Knope", address: "", user_id: 3 },
        { name: "Ron Swanson", address: "", user_id: 4 }
      ]);
    });
};
