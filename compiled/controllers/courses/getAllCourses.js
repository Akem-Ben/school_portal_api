"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCourses = void 0;
const courses_1 = __importDefault(require("../../models/courses/courses"));
const getAllCourses = async (req, res) => {
    try {
        const allCourses = await courses_1.default.findAll({});
        if (allCourses) {
            return res.status(200).json({
                message: `All Courses`,
                data: allCourses
            });
        }
        else {
            return res.status(400).json({
                message: `Unable to fetch courses`
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
exports.getAllCourses = getAllCourses;
