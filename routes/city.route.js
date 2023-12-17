const express= require("express")
const router = express.Router()
const City = require("../models/city.model")

router.post("/city",async (req,res)=>{
    try {

        let newPlace = new City(req.body)
        console.log(newPlace);
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

router.get("/city",async(req,res)=>{
    try {
        let newPlace = await City.find().populate("state")
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