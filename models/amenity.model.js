const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Amenity = mongoose.model("amenity", amenitySchema);
module.exports = Amenity;
