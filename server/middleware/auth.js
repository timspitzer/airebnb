const authMiddleware = (req, res, next) => {
  // Check if the user is authenticated
  console.log("Auth middle ware pass (DEV)");
  return next();
  if (req.isAuthenticated()) {
    return next(); // Continue to the next middleware or route
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
