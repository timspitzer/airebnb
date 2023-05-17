const { queryAllBookings, queryBooking } = require("./bookings.queries.js");

async function getAllBookings(req, res) {
  try {
    // get list of bookings
    const result = await queryAllBookings();
    res.json(result);
  } catch (e) {
    res.status(500).send({ error: "Problem fetching bookings." });
  }
}

async function getBooking(req, res) {
  try {
    const { id } = req.params;
    const result = await queryBooking(id);
    res.json(result);
  } catch (e) {
    res.status(500).send({ error: "Problem fetching booking." });
  }
}

module.exports = { getAllBookings, getBooking };
