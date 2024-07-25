import mongoose, { mongo } from "mongoose"

const bookingSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
    date: { type: Date, required: true },
    number_of_days: { type: String, required: true },
    car_id: { type: String, default: "7" }
}, { minimize: false });

const bookingModel = mongoose.model.booking || mongoose.model("booking", bookingSchema);

export default bookingModel;