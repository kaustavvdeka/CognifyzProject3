const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = router;