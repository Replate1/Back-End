const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  updateBiz,
  remove
};

function findById(id) {
  return db("users as u")
    .leftJoin("profiles as p", "p.user_id", "u.id")
    .select("u.username", "u.phoneNumber", "p.name", "p.address")
    .where("u.id", parseInt(id))
    .on("query", console.log)
    .first();
}

function updateBiz(updateId, updateBusiness) {
  return db.transaction(function(trx) {
    return Promise.all([
      db("users")
        .transacting(trx)
        .update({ phoneNumber: updateBusiness.phone })
        .where({ id: updateId }),
      db("profiles")
        .transacting(trx)
        .update({ name: updateBusiness.name, address: updateBusiness.address })
        .where({ user_id: updateId })
    ])
      .then(trx.commit)
      .catch(trx.abort);
  });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
