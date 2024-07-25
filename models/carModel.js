import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    transmission: { type: String, required: true },
    fueltype: { type: String, required: true },
    seat: { type: String, required: true }
})

const carModel = mongoose.model.Car || mongoose.model("Car", carSchema);

export default carModel;