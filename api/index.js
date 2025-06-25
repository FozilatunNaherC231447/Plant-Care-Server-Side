const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const plantRoutes = require('./routes/plants');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nwcb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create MongoClient
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
  useUnifiedTopology: true,
});

let cachedDb = null;

// Automatically extract DB name from req/plant usage (default fallback if needed)
const DEFAULT_DB_NAME = 'plantCareDB'; // replace this with your actual DB name if needed

async function connectToDB() {
  if (cachedDb) return cachedDb;
  await client.connect();

  // Use fallback/default DB name
  const db = client.db(DEFAULT_DB_NAME);
  cachedDb = db;
  return db;
}

// Health check
app.get('/', (req, res) => {
  res.send('🌿 Plant Care Tracker Backend is Running on Vercel!yooo');
});

// Attach collection to req and continue
app.use('/api/plants', async (req, res, next) => {
  try {
    const db = await connectToDB();
    req.plantCollection = db.collection('plants');
    next();
  } catch (error) {
    console.error('❌ Failed to connect to DB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}, plantRoutes);

module.exports = app;
