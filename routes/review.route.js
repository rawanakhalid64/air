const express = require("express");
const router = express.Router();
const Review = require("../models/Review.model");
const User = require("../models/user.model");

// Create a new review
router.post("/reviews", async (req, res) => {
  try {
    console.log(req.body);
    const { userId, rating, comment } = req.body;

    // Check if the required properties are present in the request body
    if (!userId || !rating || !comment) {
      return res.status(400).send({ message: "Missing required fields" });
    }
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Create the review
    const review = new Review({
      userId,
      rating,
      comment,
    });

    await review.save();
    res.send({ message: "Review created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Get all reviews for a specific user
router.get("/reviews/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const user = await Review.findOne(userId)
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Find all reviews for the user
    const reviews = await Review.find({ user: userId });

    res.send({ reviews });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
module.exports = router;
