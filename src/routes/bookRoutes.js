import express from "express"
import { addNewBook, getBooks} from "../controllers/bookController.js"

const router = new express.Router()

router.post("/books", addNewBook)
router.get("/books", getBooks)

export default router
