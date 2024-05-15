import mongoose from "mongoose";
const { Schema } = mongoose;

const ColumnSchema = new Schema({
    name: {
        type: String,
        require: true,
    }
})

const BoardSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    column: [ColumnSchema]
})

const Board = mongoose.model('Board', BoardSchema);

export default Board
