const {isYesterday, isSameDay, startOfDay } = require("./dateUtils")

    const updateProgressAfterCompletion=async(user, levelConfig)=>{

    const today = startOfDay(new Date());
    
    if(user.lastCompletedDate && 
        isSameDay(startOfDay(user.lastCompletedDate),today)
    ){
        return {alreadyCompleted:true}
    }

    if(
        user.lastCompletedDate &&
        !isYesterday(startOfDay(user.lastCompletedDate))
    ){
        user.levelDay = 1;
        user.streak = 0;
    }

    user.levelDay +=1;
    user.streak +=1;
    user.lastCompletedDate = today;
    user.totalDaysCompleted += 1;
    user.tokens +=10;


    if(user.levelDay > levelConfig.daysRequired){
        user.level +=1;
        user.levelDay=1;
        user.streak=0
    }

    await user.save();

    return{
        dayCompleted:true,
        level: user.level,
        levelDay: user.levelDay,
        streak:user.streak
    };
};

module.exports=updateProgressAfterCompletion;









// const {isYesterday} = require("./dateUtils")

//     const updateProgressAfterCompletion=async(user, levelConfig)=>{

//     const today = new Date();
    
//     if(user.lastCompletedDate && !isYesterday(user.lastCompletedDate)){
//         user.levelDay = 1;
//         user.streak = 0;
//     }

//     user.levelDay +=1;
//     user.streak +=1;
//     user.lastCompletedDate = today;
//     user.tokens +=10;


//     if(user.levelDay > levelConfig.daysRequired){
//         user.level +=1;
//         user.levelDay=1;
//         user.streak=0
//     }

//     await user.save();
// }

// module.exports=updateProgressAfterCompletion;