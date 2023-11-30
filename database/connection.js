const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.DATABASE_URL;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Database connection done...');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

module.exports = mongoose.connection;