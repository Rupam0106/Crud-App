const bookModel = require("../models/bookModel");

exports.createBook = async (req, res) => {
  const { authorId, bookName, genre } = req.body;
  if (!bookName && !genre && !authorId) {
    return res.status(400).json({
      message: "Please Provide all valid data",
    });
  }

  const book = await bookModel.create(req.body);
  res.status(201).json({ success: true, book });
};

exports.getAllBookWithAuthor = async (req, res) => {
  const getBook = await bookModel.find().populate("authorId")
  res.status(200).json({ success: true, getBook });
};
