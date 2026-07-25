import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register a new user

export const register = async (req, res) => {
    try {
        const { name, lastName, secondLastName, email, password, role, city, province, postcode } = req.body;

        //Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); //salt rounds it's common 

    //Create a new user
    const newUser = new User({
        name,
        lastName,
        secondLastName,
        email,
        password: hashedPassword,
        role,
        city,
        province,
        postcode,

    });
    
     await newUser.save();

    res.status(201).json({
      message: "Usuario registrado correctamente",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login (de momento sencillo)
export const login = async (req, res) => {
  res.json({
    message: "Login controller funcionando",
  });
};