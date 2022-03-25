
exports.seed = function(knex) {
  return knex('resources').insert([
    { resource_name: "yahooo", resource_description:"website"}, 
  ]);
};
