import {gql} from "apollo-server-express"

const typeDefs = gql`
    input TodoInput {
        text: String
    }

    type Todo {
        id: String
        text: String
        done: Boolean
    }
    
    type Query {
        allTodos: [Todo]
        todo(id: String!): Todo
    }

    type Mutation {
        addTodo(input: TodoInput): Todo
        toggleTodo(id: String!): Todo
    }
`;

export default typeDefs
