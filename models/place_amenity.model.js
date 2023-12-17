const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeAmenitySchema = new Schema({
    amenity:{type:mongoose.Types.ObjectId ,required :true ,ref:"amenity"},
    place:{type:mongoose.Types.ObjectId ,required :true , ref:"Place"}
},{
    timestamps:true
})

const PlaceAmenity = mongoose.model("PlaceAmenty" , placeAmenitySchema)
module.exports = PlaceAmenity