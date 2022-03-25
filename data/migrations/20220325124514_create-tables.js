
exports.up = async function(knex) {
  await knex.schema 

.createTable('projects', table => {
    table.increments('project_id')
})
.createTable('resources', table => {
    table.increments('resource_id')
})
.createTable('tasks', table => {
    table.increments('task_id')
})
.createTable('projects_resources', table => {
    table.increments('projects_resource_id')
})  
.createTable('projects', table => {
    table.increments('project_id')
})


};

exports.down = async function(knex) {
  await knex.schema 

.dropTablesExists('project_resources')
.dropTablesExists('tasks')
.dropTablesExists('resources')  
.dropTablesExists('projects')
};
