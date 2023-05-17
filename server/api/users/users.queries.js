const db = require("../../services/db.js");
const helper = require("../../utils/helper.js");

async function queryAllUsers() {
  const rows = await db.query("SELECT * FROM users;");
  const data = helper.emptyOrRows(rows);

  return data;
}

async function queryUser(id) {
  const rows = await db.query(`SELECT * FROM users WHERE id=${id};`);
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = { queryAllUsers, queryUser };
