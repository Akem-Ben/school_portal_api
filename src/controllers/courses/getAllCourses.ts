import {Request, Response} from 'express';
import Courses from '../../models/courses/courses';

export const getAllCourses = async(req:Request, res:Response)=>{
    try{
        const allCourses = await Courses.findAll({})
        if(allCourses) {return res.status(200).json({
            message: `All Courses`,
            data: allCourses
        })}else{return res.status(400).json({
            message: `Unable to fetch courses`
        })
    }
    }catch(err:any){
        console.log(err.message)
        return res.status(500).json({
            message: `Internal Server Error`
        })
    }
}