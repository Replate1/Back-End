const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  updateVol,
  remove
};

function findById(id) {
  return db("users as u")
    .select("u.id", "u.username", "u.phone_number", "u.name", "u.address")
    .where("u.id", parseInt(id))
    .on("query", console.log)
    .first();
}

function updateVol(updateId, changes) {
  return db("users")
    .update(changes)
    .where({ id: updateId });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
