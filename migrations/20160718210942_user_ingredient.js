
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_ingredient', function(table){
    table.increments('id');
    table.integer('user_id').references('id').inTable('user_info').onDelete('CASCADE');
    table.integer('food_id').references('id').inTable('nutrinutrition_info').onDelete('CASCADE');
    table.varchar(ingredient);
    table.integer(amount);
    table.varchar(measurement);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(user_ingredient);
};
