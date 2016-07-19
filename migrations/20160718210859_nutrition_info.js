
exports.up = function(knex, Promise) {
 		 return knex.schema.createTable('nutrition_info', function(table){
   		 table.increments('id');
   		 table.integer('calories');
       table.integer('carbohydrates');
       table.integer('fat');
       table.integer('fiber');
       table.integer('sugar');
       table.integer('cholesterol');
       table.integer('protein');
 	 	})
};
exports.down = function(knex, Promise) {
 	 	return knex.schema.dropTableIfExists(nutrition_info);
};
