const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://utkarsh7xo:<password>@instigpt.uw41hls.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URL and database name

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;

