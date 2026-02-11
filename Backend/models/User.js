const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    mobile: {
        type: String,
        default: ""
    },
    profileImage: {
        type: String,
        default: ""
    },
    level: {
        type: Number,
        default: 1
    },
    levelDay: {
        type: Number,
        default: 1
    },
    streak: {
        type: Number,
        default: 0
    },
    lastCompletedDate: {
        type: Date,
        default: null
    },
    totalDaysCompleted: {
        type: Number,
        default: 0,
    },
    tokens: {
        type: Number,
        default: 0
    },
    totalLoginDays: {
        type: Number,
        default: 0
    },
    lastLoginDate: {
        type: Date,
        default: null
    }

},
    { timestamps: true }
);



module.exports = mongoose.model("LoginUsers", userSchema);