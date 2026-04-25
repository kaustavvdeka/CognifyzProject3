const router = require("express").Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register API working" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login API working" });
});

module.exports = router;


// const router = require("express").Router();

// router.post("/register", (req, res) => {
//   res.json({ message: "Register working" });
// });

// router.post("/login", (req, res) => {
//   res.json({ message: "Login working" });
// });

// module.exports = router;