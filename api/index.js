const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../models/User"); // path sahi ho

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Backend live 🚀");
});

// GET all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        console.log(users); // MongoDB se fetch
        res.json(users);                 // JSON array return
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
