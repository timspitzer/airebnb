async function postImage(req, res) {
  res.json({ message: "Successfully uploaded files" });
}

module.exports = { postImage };
