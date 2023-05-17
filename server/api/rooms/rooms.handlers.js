const { queryAllRooms, queryRoom } = require("./rooms.queries.js");

async function getAllRooms(req, res) {
  try {
    // get list of rooms
    const result = await queryAllRooms();
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: "Problem fetching rooms." });
  }
}

async function getRoom(req, res) {
  try {
    const { id } = req.params;
    const result = await queryRoom(id);
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: "Problem fetching room." });
  }
}

module.exports = { getAllRooms, getRoom };
