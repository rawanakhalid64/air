const express= require("express")
const router = express.Router()
const PlaceAmenity = require("../models/place_amenity.model")

router.post("/place_amenity",async (req,res)=>{
    try {
        let newPlace = new PlaceAmenity(req.body)
        await newPlace.save()
        res.send()
    } catch (error) {
        let errMsg = error.message
        console.log(errMsg);
        res.status(500).send({
            message:errMsg
        })
    }
})

router.get("/place_amenity",async(req,res)=>{
    try {
        let newPlace = await PlaceAmenity.find().populate("amenity").populate("place")
        res.send(newPlace)
    } catch (error) {
        let errMsg = error.message
        console.log(errMsg);
        res.status(500).send({
            message:errMsg
        })
    }
})

module.exports= router