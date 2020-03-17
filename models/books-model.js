const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BooksSchema = new Schema(
  {
    title: String,
    pages: Number,
    isbn: String,
    author_id: Number
  },
  {
    timestamps: true
  }
);

// singular capitalized name for the mongo collection
module.exports = mongoose.model("Book", BooksSchema);
