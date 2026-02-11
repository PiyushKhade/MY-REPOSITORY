const DailyProgress = require("../models/DailyProgress");
const Level = require("../models/Level");
const User = require("../models/User")
const generateDailyTasks = require("../utils/generateDailyTasks");
const { startOfDay } = require("../utils/dateUtils")


const getHome = async (req, res) => {

  const today = startOfDay(new Date());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }


  if (user.lastCompletedDate) {
    const lastDate = startOfDay(user.lastCompletedDate);

    const missedDay =
      lastDate.getTime() !== today.getTime() &&
      lastDate.getTime() !== yesterday.getTime();

    if (missedDay) {
      user.streak = 0;
      user.levelDay = 0;
      await user.save();
    }
  }


  if (
    !user.lastLoginDate ||
    startOfDay(user.lastLoginDate).getTime() !== today.getTime()
  ) {
    user.totalLoginDays += 1;
    user.lastLoginDate = today;
    await user.save();
  }

  const hasCompletedToday = user.lastCompletedDate && startOfDay(user.lastCompletedDate).getTime() === today.getTime();

  let progress = await DailyProgress.findOne({
    userId: user._id,
    date: today,
  }).populate("tasks.taskId");


  const levelConfig = await Level.findOne({ level: user.level });

  console.log("USER LEVEL:", user.level);
  console.log("LEVEL CONFIG:", levelConfig);

  if (!levelConfig) {
    return res.status(500).json({
      message: "Level configuration not found",
    });
  }

  if (!progress) {
    // ❌ DO NOT create new tasks if today is already completed
    if (hasCompletedToday) {
      return res.json({
        lockedForToday: true,
        headerDay: user.totalLoginDays,
        level: user.level,
        levelDay: user.levelDay,
        daysRequired: levelConfig.daysRequired,
        streak: user.streak,
        tokens: user.tokens,
        tasks: [],
        lastCompletedDate: user.lastCompletedDate,
        totalDaysCompleted: user.totalDaysCompleted,
      });
    }

    // ✅ Only generate tasks if user has NOT completed today
    const tasks = await generateDailyTasks(user.level);

    progress = await DailyProgress.findOneAndUpdate(
      { userId: user._id, date: today },
      {
        $setOnInsert: {
          userId: user._id,
          date: today,
          level: user.level,
          levelDay: user.levelDay,
          tasks,
        }
      },
      { new: true, upsert: true }
    ).populate("tasks.taskId");
  }


  res.json({
    headerDay: user.totalLoginDays,
    level: user.level,
    levelDay: progress.levelDay,
    daysRequired: levelConfig.daysRequired,
    streak: user.streak,
    tokens: user.tokens,
    tasks: progress.tasks,
    lastCompletedDate: user.lastCompletedDate,
    totalDaysCompleted: user.totalDaysCompleted,
  });
};


module.exports = { getHome };