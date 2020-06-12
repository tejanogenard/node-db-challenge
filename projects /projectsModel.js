const db = require('../data/db-config')

module.exports = {
    getProjects,
    addProject,
    getTasks,
    addTask,
}

function getProjects() {
    return db("projects")
}

function addProject (project) {
    return db("projects")
        .insert(project)
}

function getTasks(id){
    return db("projects as p")
        .join("tasks as t", "t.project_id", "p.id")
        .where("p.id", id)
        .select("p.name", "p.project_description", "t.tasks_description", "t.notes")
}





function addTask(task){
    return db('tasks')
        .insert(task)
}


