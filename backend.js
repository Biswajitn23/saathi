/**
 * EXPRESS BACKEND API FOR QUOTES
 * Optional - This is a sample backend to pair with the frontend
 * To use: npm install express cors mongodb dotenv
 * Then: node backend.js
 */

const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const DB_NAME = "saathi_construction";
const COLLECTION_NAME = "quotes";

let db;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
  try {
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✓ Connected to MongoDB");
    
    // Create collection if it doesn't exist
    const collections = await db.listCollections().toArray();
    if (!collections.find(c => c.name === COLLECTION_NAME)) {
      await db.createCollection(COLLECTION_NAME);
      console.log(`✓ Created '${COLLECTION_NAME}' collection`);
    }
  } catch (error) {
    console.error("✗ MongoDB connection failed:", error);
    process.exit(1);
  }
}

// GET all quotes
app.get("/api/quotes", async (req, res) => {
  try {
    const quotes = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    // Convert MongoDB _id to id for frontend compatibility
    const formatted = quotes.map(doc => ({
      ...doc,
      id: doc.id || doc._id.toString(),
    }));
    
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new quote
app.post("/api/quotes", async (req, res) => {
  try {
    const newQuote = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await db.collection(COLLECTION_NAME).insertOne(newQuote);
    res.status(201).json({
      ...newQuote,
      _id: result.insertedId,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH update quote status
app.patch("/api/quotes/:id", async (req, res) => {
  try {
    const { status } = req.body;
    
    const result = await db
      .collection(COLLECTION_NAME)
      .findOneAndUpdate(
        { id: req.params.id },
        { $set: { status, updatedAt: new Date() } },
        { returnDocument: "after" }
      );
    
    if (!result.value) {
      return res.status(404).json({ error: "Quote not found" });
    }
    
    res.json({
      ...result.value,
      id: result.value.id || result.value._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE quote
app.delete("/api/quotes/:id", async (req, res) => {
  try {
    const result = await db
      .collection(COLLECTION_NAME)
      .deleteOne({ id: req.params.id });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Quote not found" });
    }
    
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Saathi Quote API is running" });
});

// Start server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Quote API: http://localhost:${PORT}/api/quotes`);
});

/**
 * HOW TO USE:
 * 
 * 1. Set up MongoDB (local or Atlas):
 *    - Local: mongod
 *    - Atlas: Get connection string and add to .env
 * 
 * 2. Install dependencies:
 *    npm install express cors mongodb dotenv
 * 
 * 3. Create .env file with:
 *    MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/saathi
 *    PORT=3000
 * 
 * 4. Run server:
 *    node backend.js
 * 
 * 5. Frontend will automatically use this API (set VITE_API_URL=http://localhost:3000/api in .env)
 * 
 * 6. Collections structure:
 * {
 *   "id": "QT-1692187200000",
 *   "name": "Client Name",
 *   "email": "email@example.com",
 *   "phone": "+91 98765 43210",
 *   "project": "Commercial",
 *   "budget": "Rs 2.5 Cr",
 *   "message": "Project details...",
 *   "date": "28 Mar 2026",
 *   "status": "New",
 *   "createdAt": "2026-03-28T10:00:00Z",
 *   "updatedAt": "2026-03-28T10:00:00Z"
 * }
 */
