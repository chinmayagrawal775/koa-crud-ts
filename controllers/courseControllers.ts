import * as koa from 'koa';
import courseModel from "../models/courseModel.ts";

type Course = {
    id: number,
    title: string,
    duration: string
}

// Controllers
const indexController = async (ctx: koa.Context) => {
    ctx.response.status = 200
    ctx.body = {"msg": "Working"}
}

const addCourseController = async (ctx: koa.Context) => {
    const body:Course = <Course>ctx.request.body;
    const newCourse = new courseModel({
        id: body.id,
        title: body.title,
        duration: body.duration
    });
    await newCourse.save()
    ctx.response.status = 201
    ctx.body = {"msg": "Course Added Successfully"};
}

const viewAllCoursesController = async (ctx: koa.Context) => {
    const courses = await courseModel.find()
    ctx.response.status = 200
    ctx.body = {"course": courses}
}

const viewSpecificCourseController = async (ctx: koa.Context) => {
    const course = await courseModel.find({id: ctx.params.id})
    ctx.response.status = 200
    ctx.body = {"courses": course}
}

const updateCourseController = async (ctx: koa.Context) => {
    const body:Course = <Course>ctx.request.body;
    await courseModel.updateOne({id: ctx.params.id}, {id: body.id, title: body.title, duration: body.duration})
    ctx.response.status = 200
    ctx.body = {"msg": "Course Updated Successfully"};
}

const deleteCourseController = async (ctx: koa.Context) => {
    await courseModel.deleteOne({id:ctx.params.id})
    ctx.response.status = 200
    ctx.body = {"msg": "Course Deleted Successfully"};
}

export {
    indexController,
    addCourseController,
    viewAllCoursesController,
    viewSpecificCourseController,
    updateCourseController,
    deleteCourseController
}