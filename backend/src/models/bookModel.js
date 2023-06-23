const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookName: {
    type: String,
    required: [true, "Please Provide a name of the book"],
    minLength: [3, "Please provide minimum 3 Character"],
    validate: {
      validator: function (name) {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name);
      },
      message: "Please Provide a Valid Name ",
    },
  },
  genre: {
    type: String,
    required: [true, "Please Provide a Valid genre"],
    minLength: [5, "Please provide minimum 5 Character"],
    validate: {
      validator: function (subject) {
        return /^[a-zA-Z.]*$/.test(subject);
      },
      message: "Please Provide a Valid subject",
    },
  },
});

module.exports = mongoose.model("Book", bookSchema);
