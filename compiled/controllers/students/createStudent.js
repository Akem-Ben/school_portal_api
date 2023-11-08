"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const uuid_1 = require("uuid");
const students_1 = __importDefault(require("../../models/students/students"));
const createStudent = async (req, res) => {
    try {
        const { firstName, lastName, year, faculty, reg_no, department, email, image } = req.body;
        const existingStudent = await students_1.default.findOne({ where: { email: email } });
        if (existingStudent) {
            return res.status(400).json({ message: `Student with ${email} already exists` });
        }
        const newStudent = await students_1.default.create({
            id: (0, uuid_1.v4)(),
            student_image: req?.file?.path,
            firstName,
            lastName,
            year,
            faculty,
            reg_no,
            department,
            email
        });
        await newStudent.save();
        if (newStudent) {
            return res.status(200).json({
                message: `Student created successfully`,
                data: newStudent
            });
        }
        else {
            return res.status(400).json({
                message: `Unable to create`
            });
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ message: `Internal Server Error` });
    }
};
exports.createStudent = createStudent;
