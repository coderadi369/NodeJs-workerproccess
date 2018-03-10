
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user',function(t){
		t.increments('id').primary()
        t.string('username').notNullable()
    });
  
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('user')
};
