
exports.up = async function(knex) {
  await knex.schema 
    .createTable('projects', table => {
    table.increments('project_id')
    table.text('project_name', 128).notNullable().unique()
    table.text('project_description', 128)
    table.boolean('project_completed', 128)
 

})
.createTable('resources', table => {
    table.increments('resource_id')
    table.text('resource_name', 128).notNullable().unique()
    table.text('resource_description', 128)
    
})
.createTable('tasks', table => {
    table.increments('task_id')
    table.text('task_description', 128).notNullable()
    table.string('task_notes', 128)
    table.boolean('task_completed')
    table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
  
})

.createTable('project_resources', table => {
    table.increments('project_resource_id')
    table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
})

}

exports.down = async function(knex) {
await knex.schema 
.dropTableIfExists("project_resources")
.dropTableIfExists("tasks")
.dropTableIfExists("resources")
.dropTableIfExists("projects");
};
