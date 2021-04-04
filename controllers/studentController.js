const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ students });
};
const getStudent = async (req, res) => {
  res.send("Get single student");
};
const createStudent = async (req, res) => {
  const name = req.body.name;
  const indexNumber = req.body.indexNumber;

  const student = await Student.create({ name, indexNumber });
  res.status(201).json({ students });
};
const updateStudent = async (req, res) => {
  res.send("Update Student");
};
const deleteStudent = async (req, res) => {
  res.send("Delete Student");
};

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
