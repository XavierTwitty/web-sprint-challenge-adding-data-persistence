
exports.seed = function(knex) {
  return knex('projects').insert([
    { project_name: "java", project_description:"working in google", project_completed: true }, 
    { project_name: "css", project_description:"styling", project_completed: false }, 
  ]);
};
