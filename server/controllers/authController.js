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

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //search user
     const user = await User.findOne({ email });
      if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado"
      });
    }
    //compare password
     const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Contraseña incorrecta"
      });
    }
    //create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.status(200).json({
      message: "Login correcto",
      token,
      user: {
      id: user._id,
      name: user.name,
      role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
