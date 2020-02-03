const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  updateVol,
  remove
};

function findById(id) {
  return db("users as u")
    .leftJoin("profiles as p", "p.user_id", "u.id")
    .select("u.username", "u.phone_number", "p.name")
    .where("u.id", parseInt(id))
    .on("query", console.log)
    .first();
}

function updateVol(updateId, updateVolunteer) {
  return db
    .transaction(function(trx) {
      return Promise.all([
        db("users")
          .transacting(trx)
          .update({ phone_number: updateVolunteer.phone })
          .where({ id: updateId }),
        db("profiles")
          .transacting(trx)
          .update({ name: updateVolunteer.name })
          .where({ user_id: updateId })
      ])
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then(function() {
      console.log("user and profile details successfully updated");
    })
    .catch(function(error) {
      console.log(error);
    });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
