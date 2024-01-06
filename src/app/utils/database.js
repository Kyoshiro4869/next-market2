const MONGODB_URI = "mongodb+srv://kyoshiro:kyoshiro77@cluster0.meg7fpa.mongodb.net/"


//app/utils/database.js

import mongoose from "mongoose" 

const connectDB = async() => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("Database connected successfully")
  } catch (err) {
    consoleq.log("Database connection failed")
    throw new Error(err)    
  }
}


export default connectDB