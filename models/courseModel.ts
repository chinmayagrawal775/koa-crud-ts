import mongoose from "mongoose";

// from the offical doc
interface Course {
    id: number,
    title: string,
    duration:string
}

const courseSchema = new mongoose.Schema<Course>({
    id: {type: Number},
    title: {type: String},
    duration: {type: String}
})

const courseModel = mongoose.model<Course>('course', courseSchema);

export default courseModel;