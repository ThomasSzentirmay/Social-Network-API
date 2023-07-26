const express = require("express");
const { User } = require("../models");

const router = express.Router();

// get all the users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().populate("thoughts").populate("friends");
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single user by their _id and thought/friend data
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("thoughts")
      .populate("friends");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post a new user
router.post("/create/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// put to update a user by their _id
router.put("/update/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete to remove user by their _id
router.delete("/delete/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // remove the user's associated thoughts when deleted
    await Thought.deleteMany({ username: user.username });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post to add a new friend to a user's friend list
router.post("/:userId/friends/:friendId", async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete to remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
