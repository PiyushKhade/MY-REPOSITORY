const mongoose = require("mongoose");

const connectDb= async ()=>{
    try {
        await mongoose.connect("mongodb+srv://khadepiyush123:Piyush2001@learnerapi.yzqxheu.mongodb.net/?retryWrites=true&w=majority&appName=LearnerAPI");
        console.log("Database Connection Successful")
       console.log("Connected to DB:", mongoose.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports= connectDb;