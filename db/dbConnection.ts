import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const OPTIONS = {
    dbName: 'coursedb'
}

const connectDb = async (DATABASE_URL: string) => {
    try {
        await mongoose.connect(DATABASE_URL, OPTIONS)
        console.log("Database Connected...")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;