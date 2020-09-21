// When disposing this file run the following commands
// npm uninstall apollo-server-micro

import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    hello: String!
    me: User!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
  }
  type Mutation {
    signup(email: String!, name: String!, password: String!): User!
    login(email: String!, password: String!): User!
  }
`

const user = {
  id: 'string',
  name: 'string',
  email: 'string',
  password: 'string',
}

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello'
    },
    me() {
      return user
    },
  },
  Mutation: {
    login(
      _parent: unknown,
      args: { email: string, password: string },
      ctx: unknown,
      _info: unknown
    ) {
      return user
    },
    signup(
      _parent: unknown,
      args: { email: string, password: string },
      ctx: unknown,
      _info: unknown
    ) {
      return user
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // return { loader };
  },
})

const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
