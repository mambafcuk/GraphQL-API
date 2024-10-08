import {ApolloServer} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import resolvers from "./resolver.js"
import typeDefs from "./schema.js"

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})


server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
    
})