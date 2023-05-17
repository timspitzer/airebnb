const { queryAllUsers, queryUser } = require("./users.queries.js");

async function getAllUsers(req, res) {
  try {
    // get list of users
    const result = await queryAllUsers();
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: "Problem fetching users." });
  }
}

async function getUser(req, res) {
  try {
    const { id } = req.params;
    const result = await queryUser(id);
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: "Problem fetching user." });
  }
}

module.exports = { getAllUsers, getUser };
