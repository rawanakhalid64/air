const express= require("express")
const router = express.Router()
const Amentiy = require("../models/amenity.model")

router.post("/amenity",async (req,res)=>{
    try {
        let newPlace = new Amentiy(req.body)
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

router.get("/amentiy",async(req,res)=>{
    try {
        let newAmentiy = await Amentiy.find()
        res.send(newAmentiy)
    } catch (error) {
        let errMsg = error.message
        console.log(errMsg);
        res.status(500).send({
            message:errMsg
        })
    }
})


module.exports= router