const db = require("../database/dbConfig");

module.exports = {
  add,
  update,
  findByBizId,
  findByVolId,
  findById,
  findUnassigned,
  remove
};

function add(pickup) {
  return db("pickups").insert(pickup);
}

function update(id, changes) {
  return db("pickups")
    .where({ id })
    .update(changes);
}

function findByBizId(bizId) {
  return db("pickups").where({ business_id: bizId });
}

function findByVolId(volId) {
  return db("pickups").where({ volunteer_id: volId });
}

function findUnassigned() {
  return db("pickups").where({ volunteer_id: null });
}

function findById(id) {
  return db("pickups")
    .where({ id })
    .first();
}

function remove(id) {
  return db("pickups")
    .where({ id })
    .del();
}
