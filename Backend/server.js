const PORT= 5000;
const express = require("express");
const connectDb= require("./config/db")
const authRoutes=require("./routes/AuthRoutes");
const homeRoutes=require("./routes/HomeRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app= express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/progress", progressRoutes)


connectDb().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server Listening on port ${PORT}` )
})
})