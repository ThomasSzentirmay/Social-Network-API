const mongoose = require('mongoose');
const User = require('../models/user'); 

mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
  },
  {
    username: 'jane_smith',
    email: 'jane.smith@example.com',
  }
];

const seedUsers = async () => {
  try {
    await User.deleteMany({}); 
    const createdUsers = await User.create(seedData); 
    console.log('Seed data inserted successfully:', createdUsers);
  } catch (err) {
    console.error('Error inserting seed data:', err);
  } finally {
    mongoose.disconnect(); 
  }
};

seedUsers();
