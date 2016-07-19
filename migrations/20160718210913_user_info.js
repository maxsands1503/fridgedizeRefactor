
exports.up = function(knex, Promise) {
  return knex.schema.createTable(user_info, function(table){
    table.increments(id);
    table.varchar(email);
    table.varchar(username);
    table.varchar(password);
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTableIfExists(user_info);
};
