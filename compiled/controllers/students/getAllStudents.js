"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudents = void 0;
const students_1 = __importDefault(require("../../models/students/students"));
const getAllStudents = async (req, res) => {
    try {
        const allStudents = await students_1.default.findAll({});
        if (allStudents) {
            return res.status(200).json({
                message: `All students`,
                data: allStudents
            });
        }
        else {
            return res.status(400).json({
                message: `Unable to fetch students`
            });
        }
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.getAllStudents = getAllStudents;
