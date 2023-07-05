import mongoose from "mongoose";
// const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    duration: {type: String}
})

const courseModel = mongoose.model('course', courseSchema);

export default courseModel;