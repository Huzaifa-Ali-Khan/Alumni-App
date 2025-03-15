import Student from "../models/student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); 

export const signUp = async (req, res) => {
  try {
    const { name, email, password, batch, rollNumber } = req.body;

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStudent = await Student.create({
      name,
      email,
      password: hashedPassword,
      batch,
      rollNumber,
    });
    res.status(201).json({ message: "Registration successful" }, newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: student.rollNumber, email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } 
    );
    res.status(200).json({
      message: "Login successful",
      token,
      student: {
        rollNumber: student.rollNumber,
        name: student.name,
        email: student.email,
        batch: student.batch,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
