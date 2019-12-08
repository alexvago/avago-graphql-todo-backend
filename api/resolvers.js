import {UserInputError} from "apollo-server-errors";

const defaultData = [
    {
        id: 1,
        text: "Learn GraphQL",
        done: false
    },
    {
        id: 2,
        text: "Implement todo list Backend with GraphQL",
        done: false
    }
];

let id = 3;

const resolvers = {
    Query: {
        allTodos: () => {
            return defaultData
        },
        todo: (parent, {id}) => {
            return defaultData.filter(todo => {
                return (todo.id = id)
            })[0]
        }
    },
    Mutation: {
        addTodo: (parent, {input}) => {
            const todo = {
                id: id++,
                text: input.text,
                done: false
            };

            defaultData.push(todo);
            return todo;
        },
        toggleTodo: (parent, {id}) => {
            //TODO handle inexistent element case
            const todo = defaultData.find((todo) => todo.id === id);
            if(todo){
                todo.done = !todo.done;
                return todo;
            } else {
                throw new UserInputError('ID not found');
            }
        }
    }
};

export default resolvers
