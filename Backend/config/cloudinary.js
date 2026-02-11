const cloudinary = require ("cloudinary").v2;

cloudinary.config({
    // cloud_name:process.env.CLOUD_NAME,
    // api_key:process.env.CLOUD_API_KEY,
    // api_secret:process.env.CLOUD_API_SECRET
    cloud_name: "drfgiim7a",
    api_key: "528488642914937",
    api_secret: "KRSi0a516TJYh6jSvzdeSmY6wmE"
})

module.exports=cloudinary;