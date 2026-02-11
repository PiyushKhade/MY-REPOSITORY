const mongoose =require("mongoose");

const dailyProgressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LoginUsers",
        required:true,
    },

    date:{
        type:String,
        required:true
    },

    level:Number,
    levelDay:Number,

    tasks:[
        {
            taskId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Task",
            },
            target:Number,
            completed:{
                type:Boolean,
                default:false,
            }
        }
    ],

    completed:{
        type:Boolean,
        default:false,
    },
},
{timestamps:true},
);

dailyProgressSchema.index({userId:1, date:1}, {unique:true});


module.exports=mongoose.model("DailyProgress", dailyProgressSchema);