const express = require("express");
const { User, Thought } = require("../models");

const router = express.Router();

// get all thoughts
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("reactions");
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single thought by its _id
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id).populate("reactions");
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post to create a new thought
router.post("/", async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(
      thought.userId,
      { $push: { thoughts: thought._id } },
      { new: true }
    );
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// put to update a thought by its _id
router.put("/:id", async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});
