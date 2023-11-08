"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleCourse = void 0;
const courses_1 = __importDefault(require("../../models/courses/courses"));
const getSingleCourse = async (req, res) => {
    try {
        const course_code = req.params.course_code;
        const singleCourse = await courses_1.default.findOne({ where: { course_code: course_code } });
        if (singleCourse)
            return res.status(200).json({
                message: `Course Found`,
                data: singleCourse
            });
        return res.status(400).json({
            message: `Course not found`
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.getSingleCourse = getSingleCourse;
