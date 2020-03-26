const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const Book = require("./books-model");

// this will be our data base's data structure
var WriterSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    DOB: String,
    id: { type: Number, default: Date.now() }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

WriterSchema.virtual("books", {
  ref: "Book",
  localField: "id",
  foreignField: "author_id",
  justOne: false,
  options: { sort: { title: 1 } }
});

// singular capitalized name for the mongo collection
module.exports = mongoose.model("Writer", WriterSchema);
