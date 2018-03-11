
exports.up = function(knex, Promise) {

	return knex.schema.createTable('Repos',function(t){
		t.increments('id').primary()
        t.string('reponame').notNullable()
    });
 };

exports.down = function(knex, Promise) {
  
};
