import express from "express";
import userRouter from "./userRouter.js";
import { errorHandling } from "../controller/errorHandling.js";
const route = express.Router()

route.use("/api", userRouter)
route.use("*", errorHandling)
route.use("*", (req, res)=>{
    res.status(404).json({
        errors: ["Page not found"],
        message: "Page not found",
        data: null
    })
})

export default route;