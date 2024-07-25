import carModel from "../models/carModel.js";
import fs from "fs";

// add car item

const addCar = async (req, res) => {

    const car = new carModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        transmission: req.body.transmission,
        fueltype: req.body.fueltype,
        seat: req.body.seat
    })
    try {
        await car.save();
        res.json({ success: true, message: "Car added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// all car list

const listCar = async (req, res) => {
    try {
        const cars = await carModel.find({});
        res.json({ success: true, data: cars });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// remove car

const removeCar = async (req, res) => {
    try {
        const car = await carModel.findById(req.body.id);

        await carModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Car removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { addCar, listCar, removeCar }