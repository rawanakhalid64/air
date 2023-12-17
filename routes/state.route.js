const express= require("express")
const router = express.Router()
const State = require("../models/state.model")

router.post("/state",async (req,res)=>{
    try {
        let newPlace = new State(req.body)
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

router.get("/state",async(req,res)=>{
    try {
        let newPlace = await State.find()
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