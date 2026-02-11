const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cloudinary = require("../config/cloudinary")
const path = require("path");
const fs = require("fs");

const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
        })

        res.json({
            message: "User Registered successfully",
            // token: await user.generateToken(),
            userId: user._id.toString()
            // ok: true
        });
    } catch (error) {
        console.log("REGISTER ERROR 👉", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User Does not Exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ id: user._id }, "secretkey", {
            expiresIn: "1d"
        });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
};


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user.toObject());

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}


const updateProfile = async (req, res) => {
    console.log("REQ.USER ===>", req.user);
    try {
        const { name, username, mobile } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name, username, mobile },
            { new: true },
        ).select("-password");

        if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Update failed" });
    }
};


const updateProfileImage = async (req, res) => {
    console.log("REQ.USER ===>", req.user);
    try {
        console.log("FILE:", req.file);
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }
        // const result = await cloudinary.uploader.upload(req.file.path,{
        //     folder:"profiles",
        // })

        const filePath = path.resolve(req.file.path);

        const result = await cloudinary.uploader.upload(filePath, {
            folder: "profiles",
        });

        fs.unlinkSync(req.file.path);
        console.log("REQ.USER:", req.user);
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { profileImage: result.secure_url },
            { new: true }
        ).select("-password");

         if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

        res.json(user);
    } catch (error) {
        console.error("Cloudinary error:", error);
        res.status(500).json({ message: "Image Upload Failed" })
    }
}


module.exports = { register, login, getUser, updateProfile, updateProfileImage };