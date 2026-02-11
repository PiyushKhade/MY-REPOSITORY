const express = require ("express");
const {register, login, getUser, updateProfile, updateProfileImage}= require ("../controllers/authController");
const auth=require('../middleware/auth-middleware')
const upload=require('../middleware/upload');

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/user",auth,getUser);

router.put("/profile",auth, updateProfile);

router.put("/profile/image",auth,upload.single('image'), updateProfileImage);



module.exports= router;