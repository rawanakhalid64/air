const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    state:{type:Schema.Types.ObjectId , ref:"state" ,required:true}
  },

    {
        timestamps:true
    });


const City = mongoose.model("City", citySchema);
module.exports = City;