const db = require("../../services/db.js");
const helper = require("../../utils/helper.js");

async function queryAllRooms() {
  const rows = await db.query("SELECT * FROM rooms;");
  const data = helper.emptyOrRows(rows);

  return data;
}

async function queryRoom(id) {
  const rows = await db.query(`SELECT * FROM rooms WHERE id=${id};`);
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = { queryAllRooms, queryRoom };
