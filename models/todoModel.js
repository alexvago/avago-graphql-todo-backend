//Require Mongoose
import mongoose from "mongoose";
//Define a schema
const Schema = mongoose.Schema;

const TodoModelSchema = new Schema({
    text: String,
    done: Boolean
}, {collection: 'todosCollection'});

// Compile model from schema
const TodoModel = mongoose.model('TodoModel', TodoModelSchema);

export default TodoModel;
