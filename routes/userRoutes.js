const express = require('express');
const { User } = require('../models');

const router = express.Router();

// get all the users
router.get('/', async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;