const db = require('../../data/dbConfig')


const getAll = () => {
    return db("projects");

}

const getById = (project_id) => {
    return db("projects")
    .where("project_id", project_id)
    .first()
    .then(data => {
        if (data.project_completed === 0) {
            let project_completed = false 
            return project_completed
        }
    })
  };

  const create = async (project_id) => {
    const [id] = await db("projects").insert(project_id);
    return getById(id);
}


module.exports = {
    getAll,
    getById,
    create,
}