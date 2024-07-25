import bookingModel from "../models/bookingModel.js";

// confirm booking --

const confirmBooking = async (req, res) => {
    const { first_name, last_name, email, contact_number, street, city, state, zip_code, date, number_of_days } = req.body;
    try {
        const newBooking = new bookingModel({
            first_name: first_name,
            last_name: last_name,
            email: email,
            contact_number: contact_number,
            street: street,
            city: city,
            state: state,
            zip_code: zip_code,
            date: date,
            number_of_days: number_of_days
        })

        const booking = await newBooking.save();

        res.json({ success: true, message: "booking confirmed successfully" });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
}

export { confirmBooking }