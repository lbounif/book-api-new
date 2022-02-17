//title, description,author,rating,nbVoters,img
import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true /* "     hello   " => "hello" */
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Rating must be a positif number')
            }
        }
    },
    nbVoters: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('NbVoters must be a positif number')
            }
        }
    },
    img: {
        type: String,
        default: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png",
    }
}, {
    timestamps: true
})

const Book = mongoose.model("Book", bookSchema)

export default Book