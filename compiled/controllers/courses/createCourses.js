"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const uuid_1 = require("uuid");
const courses_1 = __importDefault(require("../../models/courses/courses"));
const createCourse = async (req, res) => {
    try {
        const { course_code, name_of_course, name_of_instructor, description, enrollment_status, course_image, duration, schedule, location, perequisites, syllabus } = req.body;
        const availableCourseCode = await courses_1.default.findOne({ where: { course_code } });
        const availableCourseName = await courses_1.default.findOne({ where: { name_of_course } });
        if (availableCourseCode || availableCourseName)
            return res.status(400).json({ message: `Course Already Exists` });
        const studentz = [
            { reg_no: 'RSC-MAT-1211', firstName: 'Akem', lastName: 'Ben', email: 'akemini.ndaobong@gmail.com' },
            { reg_no: 'RSC-CHE-1213', firstName: 'Benny', lastName: 'Steve', email: 'abn4reel@gmail.com' }
        ];
        console.log(req.body);
        const newCourse = await courses_1.default.create({
            id: (0, uuid_1.v4)(),
            course_code,
            name_of_course,
            name_of_instructor,
            description,
            enrollment_status,
            course_image: req?.file?.path,
            duration,
            schedule,
            location,
            perequisites: [perequisites],
            syllabus: [syllabus],
            students: studentz
        });
        await newCourse.save();
        if (newCourse)
            return res.status(200).json({ message: `Course created successfully`, data: newCourse });
        return res.status(400).json({ message: `Unable to create` });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.createCourse = createCourse;
