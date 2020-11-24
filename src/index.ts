import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import {buildSchema, Query, Resolver} from 'type-graphql';


@Resolver()
class HelloResolver {
    @Query(() => String, {name: 'helloWorld', nullable: true /*---- может ли он вернуть нулевое значение */})
    async hello(){
        return "Hello world";
    }
}

@Resolver()
class patt {
    @Query(() => String, {name: 'pizda'})
    async hell(){
        return "Ulan";
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver, patt]//схема это код, который опрокидывает все на сервер.
    });



    const apolloServer = new ApolloServer({schema});

    const app = Express()
    apolloServer.applyMiddleware({ app });

    app.listen(4000) 
};

main();

/*но ты можешь все опрокидывать вручную:
const server = new ApolloServer({
    typedefs,
    ...,
    ....,
    .....,
})
*/






