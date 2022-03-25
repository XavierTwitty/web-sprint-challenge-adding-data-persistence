
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: "google", resource_description:"website"}, 
  ]);
};
