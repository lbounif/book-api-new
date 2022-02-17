import Book from "../models/bookModel.js"

//Add new BOOK
const addNewBook = async(req, res) => {
    const book = new Book(req.body)
    try {
        //save book to DB
        let result = await book.save()
        //send success response to client
        res.status(201).json({
            message: "Book created successfully",
            data: result
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        })
    }
}
const getBooks = async( req, res) => {
    try {
        const books = await Book.find()
        console.log("books: ", books)
        res.status(200).json({
            message: "Books found successfully",
            data: books
        })
    } catch(err){
        console.log(`Error is: ${err}`)
        //send error response to client
        res.status(500).json({
            message: "Intrenal server error",
            data: {}
        }) 
    }
}

export {
    addNewBook,
    getBooks
}