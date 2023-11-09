import express from "express"
import "./winston.js"
import route from "../router/index.js"

const appMiddleware = express()

appMiddleware.use(express.json())
appMiddleware.use(route)

export default appMiddleware
