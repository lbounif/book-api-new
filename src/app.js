import express from "express"
import "./db/mongoose.js"
import bookRoutes from "./routes/bookRoutes.js"

const app = express()

app.use(express.json())
app.use(bookRoutes)


export default app