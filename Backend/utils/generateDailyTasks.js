const Task = require("../models/Task");
const Level = require("../models/Level")

    const generateDailyTasks =async(level)=>{

        if (!level) {
    throw new Error("Level data missing in generateDailyTasks");
  }

    const levelConfig = await Level.findOne({level});

    if (!levelConfig) {
    throw new Error("Level data missing in generateDailyTasks");
  }

  const multiplier = levelConfig.difficultyMultiplier || 1;

    const tasks = await Task.find({
        minLevel:{$lte:level},
    }).limit(levelConfig.tasksPerDay);

    return tasks.map((task)=>({
        taskId:task?._id,
        target:Math.round((task.baseTarget || 1) * multiplier),
        completed:false
    }))
}

module.exports = generateDailyTasks;