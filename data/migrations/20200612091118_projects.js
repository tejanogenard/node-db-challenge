
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable().index() 
        tbl.string('project_description', 500)
        tbl.boolean('project_status').notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('resources_description', 500)
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('tasks_description', 500).notNullable()
        tbl.string('notes', 200)
        tbl.boolean('task_status').notNullable().defaultTo(false)
        
        //forgien key 
        tbl.integer('project_id').notNullable()
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('Project_Resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('Projects.id')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('Resources.id')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
    })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('Project_Resources')
};
