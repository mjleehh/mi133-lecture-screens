import mongoose from "mongoose"
import validators from 'validator'

export const filteredTodoProperties = ({_id, name, text}) => ({_id, name, text})

const bookmarkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    text: {
        type: String,
        required: true,
    },
})

export default mongoose.model('bookmarks', bookmarkSchema)
