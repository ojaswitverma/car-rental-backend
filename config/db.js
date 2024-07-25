import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ojaswitCar:auraojaswit@cluster0.xjan057.mongodb.net/car-rent").then(() => {
        console.log("DB connected");
    })
}