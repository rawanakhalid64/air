const express = require("express");
const router = express.Router();
const Place = require("../models/place.model");

// Create a new place
router.post("/places", async (req, res) => {
  try {
    const {
      name,
      location,
      userId,
      description,
      numberOfRooms,
      numberOfBathrooms,
      maxGuest,
      pricePerNight,
      latitude,
      longitude,

    } = req.body;

    // Create the place
    const place = new Place(req.body);

    await place.save();
    res.status(201).send({ message: "Place created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Get all places
router.get("/places", async (req, res) => {
  try {
    const places = await Place.find();
    res.send({ places });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Get a specific place by ID
router.get("/places/:id", async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Place.findById(placeId);
    if (!place) {
      return res.status(404).send({ message: "Place not found" });
    }
    res.send({ place });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update a specific place by ID
router.put("/places/:id", async (req, res) => {
  try {
    const placeId = req.params.id;
    const {
      name,
      location,
      userId,
      description,
      numberOfRooms,
      numberOfBathrooms,
      maxGuest,
      pricePerNight,
      latitude,
      longitude,
    } = req.body;

    const place = await Place.findByIdAndUpdate(
      placeId,
      {
        name,
        location,
        userId,
        description,
        numberOfRooms,
        numberOfBathrooms,
        maxGuest,
        pricePerNight,
        latitude,
        longitude,
      },
      { new: true }
    );

    if (!place) {
      return res.status(404).send({ message: "Place not found" });
    }

    res.send({ place });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Delete a specific place by ID
router.delete("/places/:id", async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Place.findByIdAndDelete(placeId);

    if (!place) {
      return res.status(404).send({ message: "Place not found" });
    }

    res.send({ message: "Place deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// getting

// Get a specific place by ID and user ID
router.get("/places/:id/:userId", async (req, res) => {
    try {
      const placeId = req.params.id;
      const userId = req.params.userId;
      const place = await Place.findOne({ _id: placeId, userId: userId });
      
      if (!place) {
        return res.status(404).send({ message: "Place not found" });
      }
  
      res.send({ place });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

// Get all users in a specific place
router.get("/places/:id/users", async (req, res) => {
    try {
      const placeId = req.params.id;
      
      // Find the specific place by ID
      const place = await Place.findById(placeId);
      if (!place) {
        return res.status(404).send({ message: "Place not found" });
      }
  
      // Get the user IDs associated with the place
      const userIds = place.users;
  
      // Fetch all the users with the found IDs
      const users = await User.find({ _id: { $in: userIds } });
  
      res.send({ users });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });














module.exports = router;