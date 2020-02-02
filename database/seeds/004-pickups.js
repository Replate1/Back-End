exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("pickups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pickups").insert([
        {
          food_type: "rye bread",
          amount: 5,
          pickupTime: 200100100,
          complete: false,
          business_id: 1,
          volunteer_id: 3
        },
        {
          food_type: "wilted greens",
          amount: 3,
          pickupTime: 500100100,
          complete: false,
          business_id: 2,
          volunteer_id: 4
        }
      ]);
    });
};
