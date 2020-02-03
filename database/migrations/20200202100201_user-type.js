exports.up = function(knex) {
  return knex.schema
    .createTable("user_types", tbl => {
      tbl.increments();
      tbl.string("user_type").notNullable();
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("phone_number").notNullable();
      tbl.string("email", 128).notNullable();
      tbl
        .integer("type")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("profiles", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("address");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("pickups", tbl => {
      tbl.increments();
      tbl.string("food_type").notNullable();
      tbl.integer("amount").notNullable();
      tbl.integer("pickup_time").notNullable();
      tbl.boolean("complete");
      tbl
        .integer("business_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("volunteer_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("pickups")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users")
    .dropTableIfExists("user_types");
};
