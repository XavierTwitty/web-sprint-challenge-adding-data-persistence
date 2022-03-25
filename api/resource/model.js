const db = require('../../data/dbConfig')


const getAll = () => {
    return db("resources");
}


const getById = (resource_id) => {
    return db("resources")
    .where("resource_id", resource_id).first()
  };

const create = async (resource_id) => {
    const [id] = await db("resources").insert(resource_id);
    return getById(id);
}


module.exports = {
    getAll,
    getById,
    create,
}



