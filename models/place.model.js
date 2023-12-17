const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    city: { type: mongoose.Types.ObjectId, ref: "city", required: true },

    description: { type: String, trim: true },
    numberOfRooms: { type: Number, required: true },
    numberOfBathrooms: { type: Number, required: true },
    maxGuest: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
