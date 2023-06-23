const express = require("express");
const { getAllBookWithAuthor, createBook } = require("../controller/bookController");
const router = express.Router();

router.route("/book/add").post(createBook);
router.route("/book/list").get(getAllBookWithAuthor);

module.exports = router;
