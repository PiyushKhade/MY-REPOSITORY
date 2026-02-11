const mongoose = require("mongoose");
const connectDb= require("../config/db");
const Level = require("../models/Level");

const levels = [
    {
        level: 1,
        daysRequired:3,
        tasksPerDay:4,
        difficultyMultiplier:1,
    },
    {
        level: 2,
        daysRequired:7,
        tasksPerDay:6,
        difficultyMultiplier:1.3,
    },
    {
        level: 3,
        daysRequired:15,
        tasksPerDay:10,
        difficultyMultiplier:1.6
    }
]

const seedLevels = async()=>{
    await connectDb();
    await Level.deleteMany();
    await Level.insertMany(levels);
    console.log("Levels Seeded");
    process.exit();
}

seedLevels();