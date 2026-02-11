const mongoose = require("mongoose");
const connectDb = require("../config/db");
const Tasks = require("../models/Task");

const tasks = [
    {
        name: "Push-ups",
        unit: "reps",
        baseTarget: 20,
        minLevel: 1,
        category: "strength",
    },
    {
        name: "Pull-ups",
        unit: "reps",
        baseTarget: 10,
        minLevel: 1,
        category:"strength",
    },
    {
        name: "Squats",
        unit: "reps",
        baseTarget: 20,
        minLevel: 1,
        category:"strength",
    },
    {
        name: "Running",
        unit: "kms",
        baseTarget: 1,
        minLevel:1,
        category:"strength",
    },
    {
        name: "Planks",
        unit: "sec",
        baseTarget: 30,
        minLevel:2,
        category:"strength",
    },
    {
        name :"Jumpropes",
        unit:"min",
        baseTarget:3,
        minLevel: 2,
        category:"cardio"
    },
    {
        name:"Crunches",
        unit:"reps",
        baseTarget:20,
        minLevel:3,
        category:"cardio"
    },
    {
        name:"Mountain Climbers",
        unit:"reps",
        baseTarget: 50,
        minLevel:3,
        category: "cardio"
    }
]


const seedTasks =async()=>{
    await connectDb();
    await Tasks.deleteMany();
    await Tasks.insertMany(tasks);
    console.log("Tasks seeded");
    process.exit();
}

seedTasks();