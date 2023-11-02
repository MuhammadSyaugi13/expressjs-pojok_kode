import express from "express";
import  {setUser} from "../controller/userController.js" 
const userRouter = express.Router()

userRouter.post("/users", setUser)

export default userRouter