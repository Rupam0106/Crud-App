const express = require("express");
const {
  createUser,
  getAllUser,
  loginUser,
  userDeleted,
} = require("../controller/userController");
// const { isAuthenticate, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/add").post(createUser);
router.route("/login").post(loginUser);
router.route("/list").get(getAllUser);
router.route("/user/:id").delete(userDeleted);

router.all("*", (req, res) => {
  return res.status(400).json({
    success: false,
    message: "Please provide correct endpoints",
  });
});

module.exports = router;
