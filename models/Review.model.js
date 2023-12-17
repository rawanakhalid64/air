const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now }
//   updatedAt: { type: Date, default: Date.now }

},{
  timestamps:true
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;