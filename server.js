const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB URI
const mongoURI = 'mongodb+srv://2nimer2g:2nimer2g@garagesale.ypb9iy7.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB using async/await
async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database successfully connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the application on database connection error
  }
}

// Serve static files from the 'build' directory
app.use(express.static('build'));

// Define a route to handle any other requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start the server after connecting to the database
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});