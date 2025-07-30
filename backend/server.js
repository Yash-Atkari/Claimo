if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
app.use(cors());
const app = express();
const mongoose = require("mongoose");

app.use(cors({
  origin: 'https://claimo.netlify.app', 
  credentials: true
}));

const User = require("./models/user.js");
const ClaimHistory  = require("./models/claimHistory.js");

const MongoUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/claimo";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MongoUrl);
}

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); 
  } catch (err) {
    console.error("Error finding users", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get leaderboard
app.get('/api/claims/leaderboard', async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error("Error sorting users", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add user
app.post('/api/users/:name', async (req, res) => {
  try {
    let {name} = req.params;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error("Error adding user", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Claim points
app.post('/api/claims/:userId', async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.totalPoints += randomPoints;
    await user.save();

    const history = new ClaimHistory({
      userId,
      claimedPoints: randomPoints
    });
    await history.save();

    const rankedUsers = await User.find().sort({ totalPoints: -1 }).select('name totalPoints');

    res.status(200).json({ user, randomPoints, leaderboard: rankedUsers });
  } catch (err) {
    console.error("Error claiming points", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is listening on port 3000");
})
