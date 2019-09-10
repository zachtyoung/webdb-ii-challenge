
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.string('make',128).notNullable();
      tbl.string('model',128).notNullable();
      tbl.integer('mileage',128).notNullable();
      tbl.string('vin',128).unique().notNullable();
      tbl.string('transmission_type',17);
      tbl.string('title_status',128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
