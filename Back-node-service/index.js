const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const evaluationRoutes = require('./routes/evaluationRoutes');
const eurekaClient = require('./config/eureka'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/evaluation', evaluationRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Evaluation Service is running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // 🆕 Connect to Eureka after server starts
  eurekaClient.start(error => {
    if (error) {
      console.error('Eureka connection failed ❌:', error);
    } else {
      console.log('Connected to Eureka server successfully ✅');
    }
  });
});
