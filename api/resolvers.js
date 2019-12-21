import TodoModel from "../models/todoModel";

const resolvers = {
    Query: {
        allTodos: async () => {
            try {
                return await TodoModel.find({});
            } catch (err) {
                console.error("Cannot fetch Todos from MongoDB", err);
                throw err;
            }
        },
        // currenty not used
        todo: async (parent, {id}) => {
            try {
                return await TodoModel.findById(id);
            } catch (err) {
                console.error("Cannot fetch Todo from MongoDB with ID", id, err);
                throw err;
            }
        }
    },
    Mutation: {
        addTodo: async (parent, {input}) => {
            const todo = {
                text: input.text,
                done: false
            };

            try {
                return await TodoModel.create(todo);
            } catch (err) {
                console.error('Cannot create TODO on MongoDB', err);
                throw new Error("An error occured while creating the Todo")
            }
        },
        toggleTodo: async (parent, {id}) => {
            const todo = await TodoModel.findById(id);
            try {
                todo.done = !todo.done;
                return await todo.save();
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
};

export default resolvers
