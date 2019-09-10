
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make:'Ford', model:"F-150", mileage: 20000, vin:"1234567890abcdefg", transmission_type: "automatic", title_status:"clean"}
      ]);
    });
};
