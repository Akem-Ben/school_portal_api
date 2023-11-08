"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleStudent = void 0;
const students_1 = __importDefault(require("../../models/students/students"));
const getSingleStudent = async (req, res) => {
    try {
        const reg_no = req.params.reg_no;
        const singleStudents = await students_1.default.findOne({ where: { reg_no: reg_no } });
        if (singleStudents)
            return res.status(200).json({
                message: `Student Found`,
                data: singleStudents
            });
        return res.status(400).json({
            message: `Student not found`
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.getSingleStudent = getSingleStudent;
