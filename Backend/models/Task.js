const mongoose= require("mongoose");

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    unit:{
        type:String,
        required:true
    },
    baseTarget:{
        type:Number,
        required:true,
    },
    minLevel:{
        type:Number,
        default:1,
    },
    category:{
        type:String,
        enum:["strength", "cardio", "mobility"],
    },
});




module.exports = mongoose.model("Task",taskSchema);