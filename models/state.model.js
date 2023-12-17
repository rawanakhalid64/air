const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stateSchema = new Schema({
    name:{type:String ,required :true}
},{
    timestamps:true
})

const State = mongoose.model("state" , stateSchema)
module.exports = State