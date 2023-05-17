const db = require("../../services/db.js");
const helper = require("../../utils/helper.js");

async function queryAllBookings() {
  const rows = await db.query("SELECT * FROM bookings;");
  const data = helper.emptyOrRows(rows);

  return data;
}

async function queryBooking(id) {
  const rows = await db.query(`SELECT * FROM bookings WHERE id=${id};`);
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = { queryAllBookings, queryBooking };
