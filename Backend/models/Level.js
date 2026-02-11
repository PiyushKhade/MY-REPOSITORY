const mongoose=require("mongoose");

const levelSchema=new mongoose.Schema({
    level:{
        type:Number,
        required:true,
        unique:true
    },

    daysRequired:{
        type:Number,
        required:true,
    },

    tasksPerDay:{
        type:Number,
        default:1,
    },
     difficultyMultiplier: { 
        type: Number, 
        default: 1 
    }
});



module.exports = mongoose.model("Level", levelSchema)