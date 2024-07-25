import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import carRouter from "./routes/carRoute.js"
import userRouter from "./routes/userRoute.js"
import bookingRouter from "./routes/bookingRoute.js"
import "dotenv/config"



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())  // any request of user will be parsed into json
app.use(cors())    // connects backend to frontend

// db connection
connectDB();

// api endpoint
app.use("/api/car", carRouter)
app.use("/api/user", userRouter)
app.use("/api/booking", bookingRouter)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://ojaswitCar:aura#69@cluster0.xjan057.mongodb.net/?