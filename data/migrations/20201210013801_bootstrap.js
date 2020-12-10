
exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users
        .increments()
      users
        .string("firstName")
        .notNullable()
      users
        .string("email")
        .notNullable()
        .unique()
      users
        .string("password")
        .notNullable()
    })

    .createTable("quotes", quotes => {
      quotes
        .increments()
      quotes
        .text("quote")
        .notNullable()
        .unique()
      quotes
        .string("author")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quotes")
    .dropTableIfExists("users")
};
