import {gql} from "apollo-server-express"

const typeDefs = gql`
    input TodoInput {
        text: String
    }

    type Todo {
        id: Int
        text: String
        done: Boolean
    }
    
    type Query {
        allTodos: [Todo]
        todo(id: Int!): Todo
    }

    type Mutation {
        addTodo(input: TodoInput): Todo
        toggleTodo(id: Int!): Todo
    }
`;

export default typeDefs
