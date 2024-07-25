import express from "express";
import { addCar, listCar, removeCar } from "../controllers/carController.js";
import multer from "multer";

const carRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })



carRouter.post("/add", upload.single("image"), addCar)
carRouter.get("/list", listCar)
carRouter.post("/remove", removeCar)




export default carRouter;