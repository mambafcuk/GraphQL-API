import { gql } from "apollo-server";

const typeDefs = gql`
type  Query{
    users:  [User]
    user(id:ID): User
    quotes: [Quote]
    iquote(by:ID) :[Quote]
}

type User{
id: ID!,
firstName: String,
lastName:  String,
age: Int,
quotes : [Quote]
}

type Quote{
name: String,
by: ID
}

type Mutation{
createNewUser(firstName: String!, lastName: String!, age: Int!): User
}

`

export default typeDefs