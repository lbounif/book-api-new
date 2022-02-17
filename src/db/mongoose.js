import mongoose from "mongoose"
// import "dotenv/config"

const MONGODB_URL = "mongodb://localhost:27017/book-api-db-fev"

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})