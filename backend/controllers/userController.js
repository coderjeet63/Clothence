import * as dotenv from 'dotenv'; 
dotenv.config(); 

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

export const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // sanitize email (case-insensitive)
    email = email.toLowerCase().trim();

    // check duplicates in both collections
    const existingUser = await User.findOne({ email });
    const existingAdmin = await Admin.findOne({ email });

    if (existingUser || existingAdmin) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // check if admin email
    const role =
      email === process.env.ADMIN_EMAIL.toLowerCase().trim()
        ? "admin"
        : "user";

    let newUser;
    if (role === "admin") {
      newUser = new Admin({ name, email, password, role });
    } else {
      newUser = new User({ name, email, password, role });
    }

    await newUser.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase().trim();

    // first check Admin
    let user = await Admin.findOne({ email });
    if (!user) {
      user = await User.findOne({ email });
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role, name: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
