const DailyProgress = require("../models/DailyProgress");
const User = require("../models/User");
const Level = require("../models/Level");
const updateProgressAfterCompletetion = require("../utils/progressLogic");
const { startOfDay } = require("../utils/dateUtils");

const completeTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const { taskId } = req.body;

        const today = startOfDay(new Date());

        let progress = await DailyProgress.findOne({
            userId,
            date: today,
        })

        if (!progress) {
            return res.status(404).json({ message: "Data not found" });
        }

        if (progress.completed) {
            return res.status(400).json({ message: "Day already completed" });
        }

        const task = progress.tasks.find(
            t => t.taskId.toString() === taskId
        );

        if (!task || task.completed) {
            return res.status(400).json({ message: "Invalid Task" });
        }

        task.completed = true;
        await progress.save();

        const allCompleted = progress.tasks.every(t => t.completed);

        let dayCompleted = false;

        if (allCompleted && !progress.completed) {
            progress.completed = true;
            await progress.save();

            const user = await User.findById(userId);
            const levelConfig = await Level.findOne({ level: user.level });

            await updateProgressAfterCompletetion(user, levelConfig);
            dayCompleted = true;
        }

        progress = await DailyProgress.findById(progress._id).populate("tasks.taskId");

        res.json({
            progress,
            dayCompleted
        });

    } catch (error) {
        console.log("from progressController: ", error)
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { completeTask };