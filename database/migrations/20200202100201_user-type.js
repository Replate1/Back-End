exports.up = function(knex) {
  return knex.schema
    .createTable("user-types", tbl => {
      tbl.increments();
      tbl.string("userType").notNullable();
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("phoneNumber").notNullable();
      tbl
        .integer("type")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user-types")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
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
      tbl.datetime("pickupTime").notNullable();
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
        .notNullable()
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
    .dropTableIfExists("user-types");
};
