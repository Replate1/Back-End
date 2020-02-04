exports.up = function(knex) {
  return knex.schema
    .createTable("user_types", function(tbl) {
      tbl.increments("id");
      tbl.string("user_type").notNullable();
    })
    .createTable("users", function(tbl) {
      tbl.increments("id");
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("name").notNullable();
      tbl.string("address").notNullable();
      tbl.string("phone_number").notNullable();
      tbl.string("email", 128).notNullable();
      tbl
        .integer("type")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user_types")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("pickups", function(tbl) {
      tbl.increments("id");
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
    .dropTableIfExists("users")
    .dropTableIfExists("user_types");
};
