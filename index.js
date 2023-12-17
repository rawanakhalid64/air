const express = require("express");
const app = express();
const userRouter= require("./routes/user.route")
const reviewsRouter = require("./routes/review.route");
const placeRouter = require("./routes/place.route");
const amentiyRouter= require("./routes/amenity.route")
const cityRouter= require("./routes/city.route")
const placeAmenityRouter= require("./routes/place_amenity.route")
const stateRouter= require("./routes/state.route")

app.use(express.json());

app.use(userRouter)
app.use(reviewsRouter);
app.use(placeRouter);
app.use(amentiyRouter);
app.use(cityRouter);
app.use(cityRouter);
app.use(placeAmenityRouter);
app.use(stateRouter);


const mongoose = require("mongoose");


function dbConnection(){
    // mongoose.connect("mongodb+srv://rawana:123rawana123@cluster0.z9uygyx.mongodb.net/?retryWrites=true&w=majority")
    mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(()=>{
console.log("connected successfully");
}).catch((error)=>{ 
    console.log("error with connecting to database: " + error)
});
}



app.listen(3000,() => {
console.log("iam listening on port 3000");
    dbConnection()
});