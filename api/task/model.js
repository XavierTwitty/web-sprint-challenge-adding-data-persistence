const db = require('../../data/dbConfig')



const getAll = () => {
    return db("tasks");
 }

 const getById = (task_id) => {
    return db("tasks").where("task_id", task_id).first()
  };


  const create = async (task_id) => {
    const [id] = await db("tasks").insert(task_id);
    return getById(id);
}


 module.exports = {
    getAll,
    getById,
    create,
}